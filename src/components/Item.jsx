import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ items }) => {
    
    return (
        items.data.map(item => {
            return(
                <div key={ item.id } className="card col-md-6 mt-5 mb-5 me-2 ms-2" style={{ width: 18+"rem" }}>
                    <img className="card-img-top" src={ item.url } alt={ item.id } />
                    <div className="card-body">
                        <h5 className="card-title">{ item.title }</h5>
                        <p className="card-text">Precio: ${ item.price }</p>
                        <Link to="#" className="btn btn-primary">Detalles</Link>
                    </div>
                </div>
            )
        })
    );
}

export default Item;
