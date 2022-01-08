import React, { useContext, useState } from 'react';
//import { Link } from 'react-router-dom';
import '../assets/css/App.css';	
import CartContext from './Context/CartContext';

const ItemCount = ({ stock, initial, item }) => {

	const [state, setState] = useState(initial);
	const cartContext = useContext(CartContext);

	const handleAdd = () => {

		if(state < stock){
			setState(state + 1);
		}
	}

	const handleSubstract = () => {

		if(state > initial){
			setState(state - 1);
		}
	}	

	const onAdd = () => {

		cartContext.addItem(item, state);

	}

	return (
		<>
			<div className="container input-group">
				<button 
					type="button" 
					className="btn btn-outline-success"
					onClick = { handleAdd }
				>
					+
				</button>


				<input 
					id="cartInput"
					type="text" 
					className="form-control"  
					disabled 
					value={ state }
				/>


				<button 
					type="button" 
					className="btn btn-outline-danger"
					onClick = { handleSubstract }
				>
					-
				</button>


			</div>
			<button 
				//to="/carrito" 
				className="btn btn-outline-primary mt-5 mb-5"
				onClick = { onAdd }
			>
				Agregar al carrito
			</button>
		</>
	)
}
	
	export default ItemCount;