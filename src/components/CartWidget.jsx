import React, {useState, useEffect} from 'react';

const CartWidget = ( { cant } ) => {

    const [state, setState] = useState(cant);

    useEffect(() => {
        setState(cant);
    }, [cant]);

    return (
        <>
            <div id="cart">
                <a className="nav-link" href="">
                    <i id="content_cart" className="fas fa-shopping-cart"> {state}</i>
                </a>
            </div>
        </>
    );
}

export default CartWidget;
