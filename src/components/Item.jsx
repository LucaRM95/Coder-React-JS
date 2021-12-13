import React from 'react';

const Item = ({ items }) => {
    
    console.log(items)

    return (
        items.map(item => {
            return(
                <div key={item.key} className="card col-md mt-5 mb-5 me-2 ms-2" style={{width: 18+"rem"}}>
                    <img className="card-img-top" src={ item.imageURL } alt={ item.id } />
                    <div className="card-body">
                        <h5 className="card-title">{ item.title }</h5>
                        <p className="card-text">Precio: ${ item.price }</p>
                        <a href="#" className="btn btn-primary">Detalles</a>
                    </div>
                </div>
            )
        })
    );
}

export default Item;
