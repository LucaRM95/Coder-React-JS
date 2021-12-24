import { useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ defaultValue=[], children }) => {

    const [cart, setCart] = useState(defaultValue);

    const getItem = (itemId) => {
        return cart.find( item => item.id === itemId );
    }

    const addItem = (item /*quantity*/) => {
        setCart(cart.push(item));
    }

    const removeItem = (itemId) => {
        
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return id === undefined ? undefined : getItem(id) !== undefined;
    }

    return(
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
