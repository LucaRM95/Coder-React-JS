import React, { useState } from "react";
import Item from "./Item";

const ItemList = ( { items } ) => { 

    let [listItem, setListItem] = useState([]);

    const data = new Promise((resolve, reject) => {
        
        if ( items !== undefined){

            resolve( items );

        }else{
            reject("Hubo un problema al cargar los productos. Intentalo más tarde!");
        }
    })
    data.then( data => {
        setListItem(data);
    })
    data.catch( err => {
        console.warn(err); 
    })

    return (
        <>
            <strong>Hola</strong>
            <Item items = { listItem }/>
        </>
    )
}

export default ItemList;
