import React from 'react'

const Search = () =>
{
    return (
        <form className="position-relative d-flex" role="search">
            <input className="w-100 border border-info rounded-pill p-1 form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
    )
}

export default Search