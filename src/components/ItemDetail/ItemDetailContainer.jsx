import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Spinner from '../spinner/Spinner';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const params = useParams();
    const { data, loading } = useFetch(params.name);  

    while(loading){
        return(<Spinner />);
    }

    const itemDetail = data.find((item) => item.id === params.id)

    return (
        
        <ItemDetail item={ itemDetail } />
    )
}

export default ItemDetailContainer;
