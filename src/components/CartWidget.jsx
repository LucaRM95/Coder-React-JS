import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ( { cant } ) => {

    const [state, setState] = useState(cant);

    useEffect(() => {
        setState(cant);
    }, [cant]);

    return (
        <>
            <div id="cart">
                <Link className="nav-link" to="#">
                    <i id="content_cart" className="fas fa-shopping-cart"> {state}</i>
                </Link>
            </div>
        </>
    );
}

export default CartWidget;
