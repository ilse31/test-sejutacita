/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Search from '../components/Search'

const Home = () =>
{
    const [ categories, setCategories ] = useState( [] )
    const [ bookdata, setBookdata ] = useState( [] )
    const [ categoryID, setCategoryID ] = useState( 1 )
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
                console.log( response.data );
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
    }, [ loading, categoryID ] )

    const handleChange = ( e ) =>
    {
        e.preventDefault()
        console.log( e.target.value );
        setCategoryID( e.target.value )
        console.log( categoryID );
    }

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
                        <Search />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gap-4 p-3 vh-100 justify-content-center">
                    {
                        bookdata.map( ( book, index ) =>
                            <Card key={ index } imgLink={ book.cover_url } titleImage={ book.title } author={ book.authors[ 0 ] } />
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Home