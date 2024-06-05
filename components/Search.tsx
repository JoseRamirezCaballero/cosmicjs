'use client';

import { useRouter } from 'next/navigation'
import React, { useState } from 'react';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter()

    const handleChange = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const handleButton = () => {
        if (!searchTerm) return;
        const formattedSearchTerm = searchTerm.replace(/\s+/g, '-');
        router.push(`/search/${formattedSearchTerm}`);
    };

    return (
        <div className="max-w-md mx-auto relative -mt-1.5">
            <div className="relative">
                <svg className="absolute w-5 h-5 ml-3 mt-1.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <label htmlFor="small-search" className="sr-only">Search</label>
                <input
                    type="search"
                    id="small-search"
                    className="sm:w-full w-3/4 p-1.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Buscar post..."
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyUp={(e) => e.key === 'Enter' && handleButton()}
                    maxLength={15}
                />
            </div>
            <button
                type="button"
                onClick={handleButton}
                className="hidden sm:block absolute inset-y-0 right-0 px-2 sm:h-8.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-xs"
            >
                Buscar
            </button>
        </div>
    );
}


