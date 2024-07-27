import React from 'react'
import Filter from './Filter'
import Search from './Search'

const Navbar = () => {


    return (

        <nav>
            <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
                <div className="items-start justify-between gap-x-4 py-4 border-b sm:flex">
                    <Filter
                    />
                    <Search
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar