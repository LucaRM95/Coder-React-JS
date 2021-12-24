import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';	

const ItemCount = ({ stock, initial, onAdd }) => {

	const [state, setState] = useState(initial);

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
			<Link 
				to="/carrito" 
				className="btn btn-outline-primary mt-5 mb-5"
				onClick = { onAdd( state ) }
			>
				Agregar al carrito
			</Link>
		</>
	)
}
	
	export default ItemCount;