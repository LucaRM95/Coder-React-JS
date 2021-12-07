import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';

const ItemCount = ({ stock, initial }) => {

    const contentCart = document.querySelector("#content_cart");

    const [state, setState] = useState(initial);
    
    const handleAdd = () => {
        setState(state + 1);
    }

    const handleSubstract = () => {
        setState(state - 1);
    }

    const onAdd =  () => {
        const cartInput = document.querySelector("#cartInput").value;

        contentCart.textContent = ` ${cartInput}`;
    }

    return (
        <>
            <h3 className="mt-5">Items a agregar al carrito</h3>
            <div className="container input-group mt-5">
                <button 
                    type="button" 
                    className="btn btn-outline-success"
                    onClick = {(state < stock) ? handleAdd : console.log("Limite de stock")}
                >
                    +
                </button>

                <input 
                    id="cartInput"
                    type="text" 
                    className="form-control" 
                    aria-label="Text input with segmented dropdown button" 
                    disabled 
                    value={state}
                />

                <button 
                    type="button" 
                    className="btn btn-outline-danger"
                    onClick = {(state > initial) ? handleSubstract : console.log("Cantidad minima es de 1")}
                >
                    -
                </button>

            </div>
            <button 
                type="button" 
                className="btn btn-outline-primary mt-5"
                onClick = { onAdd }
            >
                Agregar al carrito
            </button>
        </>
    )
}

export default ItemCount;
