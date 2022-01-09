import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from './Context/CartContext';

const CartWidget = () => {

    const cartContext = useContext(CartContext);

    const count = cartContext.cartCountFunc();

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
