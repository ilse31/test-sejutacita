import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Select from './Select'

const Layout = () =>
{
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="d-flex justify-content-between">
                    <div>
                        <Select />
                    </div>
                    <div>
                        <Search />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout