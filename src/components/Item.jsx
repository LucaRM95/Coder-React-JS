import React from 'react';

const Item = ({ items }) => {
    
    console.log(items)

    return (
        items.map(item => {
            return(
                <div key={item.key} className="container">
                    <div className="row">
                        <div className="card col mt-5" style={{width: 18+"rem"}}>
                            <img className="card-img-top" src={ item.imageURL } alt={ item.id } />
                            <div className="card-body">
                                <h5 className="card-title">{ item.title }</h5>
                                <p className="card-text">${ item.price }</p>
                                <a href="#" className="btn btn-primary">Detalles</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default Item;
