import React from 'react'
import { FaFilter } from "react-icons/fa";
import { useAppContext } from '../Context';

const Filter = () => {

    const { setTypeFilter, setDateFilter } = useAppContext();

    return (

        <div className="w-full sm:max-w-md flex flex-col gap-4 sm:flex-row">

            <select onChange={(e) => setDateFilter(e.target.value)}
                className="flex items-center sm:justify-center gap-x-2 px-4 py-2 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 md:text-sm"
                data-aos="fade-down" data-aos-delay="1200"
            >
                <option value="" selected> <FaFilter /> Filter by Date</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>

            <select onChange={(e) => setTypeFilter(e.target.value)}
                className="flex items-center sm:justify-center gap-x-2 px-4 py-2 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 md:text-sm"
                data-aos="fade-down" data-aos-delay="1400"
            >
                <option value="" selected>Filter by Type</option>
                <option value="Signature">Signature</option>
                <option value="Standalone">Standalone</option>
            </select>

        </div>

    )
}


export default Filter