import React from 'react'

const Pagination = ( { postPerPage, totalPost, paginate } ) =>
{
    const pageNumbers = []
    for ( let index = 1; index <= Math.ceil( totalPost / postPerPage ); index++ )
    {
        pageNumbers.push( index )
    }
    return (
        <div>
            <ul className="pagination">
                { pageNumbers.map( number => (
                    <li key={ number } className="page-item">
                        <button onClick={ () => paginate( number ) } className="page-link">
                            { number }
                        </button>
                    </li>
                ) ) }
            </ul>
        </div >
    )
}

export default Pagination