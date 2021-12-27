import React, { useContext } from 'react'
import '../../assets/css/styles.css';
import CartContext from '../Context/CartContext';
import ItemCount from '../ItemCount';
import Spinner from '../spinner/Spinner';

const ItemDetail = ({ item }) => {

    const cartContext = useContext(CartContext);

    // const OnAdd =  ( state ) => {
        
    //     product.quantity = state;
        
    //     console.log(product)

    //     //cartContext.addItem( product );
    // }
    
    return (
        <>
            {
                (item === undefined)
                ?
                <Spinner />
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
                                <ItemCount stock={item.stock} initial={1} onAdd={ cartContext.addItem } item={item}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemDetail;
