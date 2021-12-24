import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import '../../assets/css/styles.css';
import CartDetail from '../CartDetail';
//import CartContext from '../Context/CartContext';
import ItemCount from '../ItemCount';

const ItemDetail = ({ item }) => {

    let [quantity, setQuantity] = useState(1);
    //const cartContext = useContext(CartContext)

    // console.log("cartContext", cartContext)
    // console.log(item)

    const OnAdd =  ( state ) => {
        useEffect(() => {
            setQuantity(quantity = state); 
        }, [state]);

        <CartDetail quant={quantity}/>
    }
    
    console.log(quantity)

    return (
        <>
            {
                (item === undefined)
                ?
                <div>
                    <h1>Cargando...</h1>
                </div>
                :
                <div className='container-fluid mt-5'>
                    <h1>Detalles de producto</h1>
                    <br />
                    <hr />
                    <div className='container'>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <img src={item.url} alt="" /> 
                            </div>
                            <div className="detail-body col-md-6">
                                <h2 className='mt-5 mb-5'>{item.title}</h2>
                                <p className='mb-5'>Stock disponible: {item.stock} (Unidades)</p>
                                <p className='mb-5'>Precio: ${item.price}</p>
                                <p className='mb-5'>Todos los talles disponibles</p>
                                <ItemCount stock={item.stock} initial={1} onAdd={ OnAdd }/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemDetail;
