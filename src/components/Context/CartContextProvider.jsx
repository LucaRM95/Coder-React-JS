import { useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const getItem = (itemId) => {
        return cart.find( item => item.id === itemId );
    }

    const isInCart = (id) => {
        return id === undefined ? undefined : getItem(id) !== undefined;
    }

    const addItem = (item, quantity) => {

        let aux = item;
        aux.quantity = quantity;

        if(isInCart(item && item.id)){
            return console.log("Wont add existing item to cart");
        }
        setCart([...cart, aux]);

        console.log(cart)
    }

    const removeItem = (itemId) => {
        
    }

    const clear = () => {
        setCart([])
    }


    return(
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
