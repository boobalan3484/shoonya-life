import React, { createContext, useState, useEffect, useContext } from 'react';

import api from './api/API'

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [allData, setAllData] = useState([])
    const [noDataFound, setNoDataFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await api.get(`?page=${currentPage}&limit=${itemsPerPage}`);;
                let filteredItems = [];

                if (searchTerm) {
                    try {
                        response = await api.get(`?search=${searchTerm}`);
                        filteredItems = response.data.filter((item) =>
                            item.title.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                    }
                    catch (err) {
                        if (err.response && err.response.status === 404) {
                            setNoDataFound(true);
                            setTotalPages(0)
                            return;
                        }
                        else {
                            console.error('Error fetching data:', err.message);
                        }
                    }
                }
                else {
                    response = await api.get('/');
                    filteredItems = response.data;
                    setNoDataFound(false);
                    setAllData(response.data)
                }

                if (typeFilter) {
                    response = await api.get(`?filter=${typeFilter}`);
                    filteredItems = filteredItems.filter((item) =>
                        item.type.toLowerCase().includes(typeFilter.toLowerCase())
                    );
                }

                if (dateFilter) {
                    response = await api.get('/');
                    filteredItems = filteredItems.filter((item) => {
                        const timestamp = item.date;
                        return filterByYear(timestamp);
                    });
                }

                const paginatedItems = filteredItems.slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                );

                setItems(paginatedItems);
                setTotalItems(filteredItems.length);

            } catch (err) {
                console.error('Error fetching data:', err.message);

            } finally {
                setIsLoading(false)
            }
        };
        setTotalPages(Math.ceil(totalItems / itemsPerPage))

        fetchData()
    }, [currentPage, totalItems, searchTerm, typeFilter, dateFilter]);

    const filterByYear = (timestamp) => {
        if (dateFilter === '2023') {
            const [startDate, endDate] = [1672511401, 1704047399];
            return timestamp >= startDate && timestamp <= endDate;
        } else if (dateFilter === '2024') {
            const [startDate, endDate] = [1704047401, 1735669799];
            return timestamp >= startDate && timestamp <= endDate;
        }
        return true;
    };

    const formatDateRange = (timestamp, duration) => {
        const startDate = new Date(timestamp * 1000);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + duration - 1);

        const formattedEndDate = endDate.getDate();
        const startMonth = startDate.toLocaleDateString('en-US', { month: 'long' });
        const startDay = startDate.getDate();
        const startYear = startDate.getFullYear();

        return `${startMonth} ${startDay} - ${formattedEndDate}, ${startYear}`;
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearchTerm(searchInput);
        setCurrentPage(1);
    };


    return (
        <AppContext.Provider value={{
            allData, isLoading,
            setTypeFilter, setDateFilter, 
            searchInput, setSearchInput, handleSearch,
            isLoading, noDataFound,
            items, formatDateRange,
            currentPage, totalPages, setCurrentPage
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};