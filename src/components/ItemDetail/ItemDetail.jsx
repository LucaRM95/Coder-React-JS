import React from 'react'
import '../../assets/css/styles.css';
import ItemCount from '../ItemCount';

const ItemDetail = ({ item }) => {

    //const itemDetail = items.find((item) => item.id == id)
    console.log(item)
    while(item === undefined){
        return <div><h1>Cargando...</h1></div>
    }

    return (
        <div className='container mt-5'>
            <h1>Detalles de producto</h1>
            <br />
            <hr />
            <div className='container'>
                <div className="row mt-5">
                    <div className="col">
                        <img src={item.url} alt="" /> 
                    </div>
                    <div className="detail-body col">
                        <h2 className='mt-5 mb-5'>{item.title}</h2>
                        <p className='mb-5'>Stock disponible: {item.stock} (Unidades)</p>
                        <p className='mb-5'>Precio: ${item.price}</p>
                        <p className='mb-5'>Todos los talles disponibles</p>
                        <ItemCount stock={item.stock} initial={1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
