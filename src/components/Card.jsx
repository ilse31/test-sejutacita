import React from 'react'

const Card = ( { imgLink, titleImage, author, onChange } ) =>
{
    return (
        <div className='card p-0' style={ { width: '18rem' } }>
            <img src={ imgLink } className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-title">{ titleImage }</p>
                <p className='text-muted'>{ author }</p>
                <button onChange={ onChange } className='btn btn-primary'>Add to Favorites</button>
            </div>
        </div >
    )
}

export default Card