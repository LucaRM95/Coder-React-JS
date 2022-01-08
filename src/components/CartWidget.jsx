import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ cant }) => {

    let [count, setCount] = useState(0)
    let suma = 0;

    if(cant !== null){
        cant.map(q => {
            suma += parseInt(q.quantity)
        })
    }
    useEffect(() => {
        
        setCount(suma)
    
        console.log(suma)
    }, [cant])

    return (
        <>
            <div id="cart">
                <Link className="nav-link" to="/carrito">
                    <i id="content_cart" className="fas fa-shopping-cart me-1"></i>
                    {count}
                </Link>
            </div>
        </>
    );
}

export default CartWidget;
