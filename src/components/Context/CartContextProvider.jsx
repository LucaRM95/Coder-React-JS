import { useState } from 'react';
//import LocalStorage from '../../localStorage/LocalStorage';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {

    const storage = JSON.parse(localStorage.getItem("items"));
    let [cart, setCart] = useState(storage);

    const cartCountFunc = () => {

        let contAdd = 0

        storage.map(item => contAdd += item.quantity );

        return contAdd;
    }

    const getItem = (itemId) => {
        return cart.find( item => item.id === itemId);
    }

    const isInCart = (id) => {
        return id === undefined ? undefined : getItem(id) !== undefined;
    }

    const addItem = (item, quantity) => {

        item.quantity = quantity;
        
        if(storage === null){
            setCart(cart = []);
        } 

        if(isInCart(item && item.id)){
            return console.log("Wont add existing item to cart");
        }

        setCart(cart = [...cart, item])

        localStorage.setItem("items", JSON.stringify(cart));
    }

    const removeItem = (itemId) => {
        
        const newItems = storage.filter( item => item.id !== itemId );

        setCart(newItems);

        localStorage.setItem("items", JSON.stringify(newItems));
    }

    const clear = () => {
        setCart([])
        localStorage.clear()
    }


    return(
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, cartCountFunc }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
