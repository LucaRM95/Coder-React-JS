import React from 'react'
import '../../assets/css/styles.css';

const ItemDetail = ({ item }) => {

    return (
        <div className='container mt-5'>
            <h1>Detalles de producto</h1>
            <br />
            <hr />
            <div className='container'>
                <div className="row mt-5">
                    <div className="col">
                        <img src={item[0].url} alt="" /> 
                    </div>
                    <div className="detail-body col">
                        <h2 className='mb-5'>{item[0].title}</h2>
                        <p className='mb-5'>Stock disponible: {item[0].stock}</p>
                        <p className='mb-5'>Precio: ${item[0].price} (Unidades)</p>
                        <p className='mb-5'>Todos los talles disponibles</p>
                        <button className="btn btn-outline-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
