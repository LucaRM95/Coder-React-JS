import React from 'react';

const ItemListContainer = ({ greeting, marginTop }) => {
    return (
        <>
            <section className={ marginTop }>
                <h1>{ greeting }</h1>
            </section>
        </>
    );
}

export default ItemListContainer;
