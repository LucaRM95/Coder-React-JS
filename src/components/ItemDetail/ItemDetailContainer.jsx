import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const params = useParams();
    const { data, loading } = useFetch(params.name);  

    while(loading){
        return(<p>Cargando...</p>);
    }

    const itemDetail = data.find((item) => item.id === params.id)

    return (
        <ItemDetail item={ itemDetail } />
    )
}

export default ItemDetailContainer;
