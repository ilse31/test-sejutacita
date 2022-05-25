import React, { useEffect } from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'


const Favorites = () =>
{
      let navigate = useNavigate()
    let data = localStorage.getItem( "items" )
    data = JSON.parse( data )
    console.log( "inidata", data );
    //remove element id in localStorage
    const removeItem = ( bookTitle ) =>
    {
        let data = localStorage.getItem( "items" )
        data = JSON.parse( data )
        data = data.filter( item => item.bookTitle !== bookTitle )
        localStorage.setItem( "items", JSON.stringify( data ) )
         navigate( '/' )
    }

    useEffect( () =>
    {
        console.log( "data", data );
    }, [ data ] )

    return (
        <Layout>
            <div className="container">
                <div className="row gap-4 p-3 justify-content-center">
                    { data.map( ( item, index ) =>
                        <Card key={ index } id={ item.bookID } text="Delete From Favorites" onClick={ () => removeItem( item.bookTitle ) } author={ item.author } imgLink={ item.cover_url } titleImage={ item.bookTitle } />
                    ) }
                </div>
            </div>
        </Layout>
    )
}

export default Favorites
