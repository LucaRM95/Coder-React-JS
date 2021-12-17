import React from 'react';
import useFetch from '../../hooks/useFetch';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const { data } = useFetch();  
    
    while(data[0] === undefined){
        return(<p>Cargando...</p>);
    }

    return (
        <ItemDetail item={ data }/>
    )
}

export default ItemDetailContainer;
