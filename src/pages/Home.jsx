/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import Search from '../components/Search'


const Home = () =>
{
    const [ text, setText ] = useState( "Add To Favorites" )
    const [ searchValue, setSearchValue ] = useState( "" )
    const [ favorites, setFavorites ] = useState( [] )
    const [ categories, setCategories ] = useState( [ { "id": 1, "name": "Happiness \u0026 Mindfulness" }, { "id": 11, "name": "Career \u0026 Business" }, { "id": 12, "name": "Productivity \u0026 Time Management" }, { "id": 19, "name": "Society \u0026 Politics" }, { "id": 21, "name": "Investment \u0026 Finance" } ] )
    const [ bookdata, setBookdata ] = useState( [] )
    const [ categoryID, setCategoryID ] = useState( 1 )
    const [ currentPage, setCurrentPage ] = useState( 1 )
    const [ postPerPage ] = useState( 10 )
    const [ loading, setLoading ] = useState( true )
    const getCategories = async () =>
    {
        await axios.get( 'https://api.codetabs.com/v1/proxy?quest=https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories' )
            .then( response =>
            {
                setCategories( response.data )
            } ).catch( error =>
            {
                console.log( error )
            } )
    }
    const getDataCategories = async () =>
    {
        await axios.get( `https://api.codetabs.com/v1/proxy?quest=https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${ categoryID }` )
            .then( response =>
            {
                setBookdata( response.data )
                setLoading( false )
            } ).catch( error =>
            {
                console.log( error )
            } )
    }

    useEffect( () =>
    {
        getDataCategories()
        getCategories()
        localStorage.setItem( 'items', JSON.stringify( favorites ) );
    }, [ loading, categoryID ] )

    const handleChange = ( e ) =>
    {
        e.preventDefault()
        console.log( e.target.value );
        setCategoryID( e.target.value )
        console.log( categoryID );
    }

    const AddFavorites = ( bookID, bookTitle, cover_url, author ) =>
    {
        const newFavorites = {
            bookID,
            bookTitle,
            cover_url,
            author,
            favorites: true
        }
        const newFavoritesList = [ ...favorites, newFavorites ]
        setFavorites( newFavoritesList )
        localStorage.setItem( 'items', JSON.stringify( newFavoritesList ) );
        document.getElementById( bookID ).innerHTML = "Favorites"
    }

    const indexOfLastpost = currentPage * postPerPage
    const indexofFirstPost = indexOfLastpost - postPerPage
    const currentPost = bookdata.slice( indexofFirstPost, indexOfLastpost )
    const paginate = ( pageNumber ) => setCurrentPage( pageNumber )

    return (
        <Layout>
            <div className="container mt-4">
                <div className="d-flex justify-content-between">
                    <div>
                        <select className="form-select" defaultValue={ 1 } onChange={ handleChange } aria-label="Default select example">
                            { categories.map( ( category, index ) =>
                                <option key={ index } value={ category.id }>{ category.name }</option>
                            ) }
                        </select>
                    </div>
                    <div>
                        <Search searchValue={ searchValue } onChange={ ( e ) => setSearchValue( e.target.value ) } />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gap-4 p-3 vh-100 justify-content-center">
                    {
                        currentPost
                            .filter( ( book ) =>
                            {
                                return book.title && book.authors[ 0 ].toLowerCase().includes( searchValue.toLowerCase() )
                            } ).map( ( book, index ) =>
                                <Card key={ index } id={ book.id } text={ text } imgLink={ book.cover_url } onClick={ () => AddFavorites( book.id, book.title, book.cover_url, book.authors ) } titleImage={ book.title } author={ book.authors[ 0 ] } />
                            )
                    }
                    <div className='d-flex justify-content-center'>
                        <Pagination postPerPage={ postPerPage } totalPost={ bookdata.length } paginate={ paginate } />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home