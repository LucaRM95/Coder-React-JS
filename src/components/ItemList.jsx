import React, { useState } from "react";
import Item from "./Item";

const ItemList = ( { items } ) => { 

    let [listItem, setListItem] = useState([]);

    const data = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if ( items !== undefined){
    
                resolve( items );
    
            }else{
                reject("Hubo un problema al cargar los productos. Intentalo más tarde!");
            }
        }, 2000);
    })
    data.then( data => {
        setListItem(data);
    })
    data.catch( err => {
        console.warn(err); 
    })

    return (
        <div className="container">
            <div className="row">
                <Item items = { listItem }/>
            </div>
        </div>    
    )
}

export default ItemList;
