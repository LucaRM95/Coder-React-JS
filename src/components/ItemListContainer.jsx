import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Productos  from '../Base/_ProductosBD.js';

const ItemListContainer = ({ greeting, marginTop }) => {

    return (
        <>
            <section className={ marginTop }>
                <h1>{ greeting }</h1>
                <hr />
                <ItemCount stock={5} initial={1}/>
                <ItemList items={ Productos }/>
            </section>
        </>
    );
}

export default ItemListContainer;
