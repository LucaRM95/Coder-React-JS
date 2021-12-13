import React from 'react';

const Item = ({ item }) => {
    
    console.log(item)

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-8" style={{width: 18+"rem"}}>
                    <img className="card-img-top" src="imageURL" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
