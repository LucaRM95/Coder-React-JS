import React, { useContext } from 'react';
import CartContext from './Context/CartContext';

const CartDetail = () => {

    const items = JSON.parse(localStorage.getItem("items"));
    const cartContext = useContext(CartContext);
    let totalPrice = 0;

    const handleClickDeleteItem = ( e ) => {

        const deleteItem = e.target.parentNode.parentNode.parentNode;
        const newArray = items.filter( item => item.id !== deleteItem.id );

        totalPrice = 

        localStorage.setItem("items", JSON.stringify(newArray));

        deleteItem.remove();
    }

    const handleClickClear = () => {
        cartContext.clear();
    }

    const handleClickBuy = () => {
        alert("Tu compra se ha realizado con exito!!");
        cartContext.clear();
    }

    if(items === null || items.length === 0){
        return (
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h2>No hay productos en el carrito</h2>
                    </div>
                    <div className="col-md-12">
                        <span>
                            Buscá tus productos favoritos en la sección de categorias.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <h2 className="mt-5">Cart products</h2>
            {
                items.map( item => {

                    totalPrice += item.price;

                    return (
                        <div key={item.id} id={item.id} className="container">
                            <div className="row mt-5 align-items-md-center">
                                <div className="col-md-4">
                                    <img src={item.url} 
                                    style={{width: 50+"%"}} 
                                    alt="algo" />
                                </div>
                                <div className="col-md-4">
                                    <strong>{item.title}</strong>
                                    <br />
                                    <strong>Cantidad: {item.quantity}</strong>
                                    <br />
                                    <strong>Precio: ${item.price}</strong>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-danger" onClick={handleClickDeleteItem}>X</button>
                                </div>
                            </div> 
                            <hr />
                        </ div>
                    )
                })
            }
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p>Total: ${totalPrice}</p>
                    </div>
                    <div className="col-md-8">
                        <button className="btn btn-success me-5" onClick={handleClickBuy}>Comprar</button>
                        <button className="btn btn-danger" onClick={handleClickClear}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartDetail;
