import React from 'react';
import useFetch from '../../hooks/useFetch';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const { data, loading } = useFetch();  

    while(loading){
        return(<p>Cargando...</p>);
    }

    return (
        <ItemDetail item={ data }/>
    )
}

export default ItemDetailContainer;
