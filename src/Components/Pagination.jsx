import React from 'react'
import { useAppContext } from '../Context';
// import { useState } from "react"


const Pagination = () => {
    const { currentPage, totalPages, setCurrentPage } = useAppContext();

    const onPageChange = setCurrentPage

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange((currentPage) => currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange((currentPage) => currentPage + 1)
        }
    }

    const renderPages = () => {
        const pages = []

        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`${currentPage === i ? ' text-white font-bold bg-indigo-600 rounded-md' : ''}  py-1 px-2`}
                >
                    {i}
                </button>
            )
        }
        return pages;
    }
    return (

        <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
            <div className="hidden justify-between text-sm md:flex" data-aos="zoom-in">
                <div>
                    Page {currentPage} of {totalPages}
                </div>
                <div className="flex items-center gap-12" aria-label="Pagination">
                    <button onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'hover:text-indigo-600 '} flex items-center gap-x-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                        </svg>
                        Previous
                    </button>
                    {renderPages()}
                    <button onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`${currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : 'hover:text-indigo-600'} flex items-center gap-x-2`}>
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* On mobile version */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
                <button onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'hover:text-indigo-600 '} flex items-center gap-x-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                    </svg>
                    Previous
                </button>
                <div className="font-medium">
                    Page {currentPage} of {totalPages}
                </div>
                <button onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`${currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : 'hover:text-indigo-600'} flex items-center gap-x-2`}>
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default Pagination