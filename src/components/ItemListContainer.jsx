import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting, marginTop }) => {
    return (
        <>
            <section className={ marginTop }>
                <h1>{ greeting }</h1>
                <hr />
                <ItemCount stock={5} initial={1}/>
            </section>
        </>
    );
}

export default ItemListContainer;
