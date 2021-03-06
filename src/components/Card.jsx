import React from 'react'

const Card = ( { imgLink, titleImage, author, onClick, text, id } ) =>
{
    return (
        <div className='card p-0' style={ { width: '18rem' } }>
            <img src={ imgLink } className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-title">{ titleImage }</p>
                <p className='text-muted'>{ author }</p>
                <button onClick={ onClick } type='submit' id={ id } className='btn btn-primary'>{ text }</button>
            </div>
        </div >
    )
}

export default Card