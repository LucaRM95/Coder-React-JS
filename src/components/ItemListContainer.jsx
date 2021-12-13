import React from 'react';
import ItemCount from './ItemCount';
import Item from './Item';
import ItemList from './ItemList';
import Productos  from '../Base/_ProductosBD.js';

const ItemListContainer = ({ greeting, marginTop }) => {

    return (
        <>
            <section className={ marginTop }>
                <h1>{ greeting }</h1>
                <hr />
                <ItemCount stock={5} initial={1}/>
                <hr />
                <h2>Lista de productos</h2>
                {/* <div class="container">
                    <div className="row">
                        <Item Productos={ Productos }/>
                    </div>
                </div> */}
                <ItemList items = { Productos }/>
            </section>
        </>
    );
}

export default ItemListContainer;
