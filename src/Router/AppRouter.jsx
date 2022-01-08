import { Routes, Route } from 'react-router-dom';

import HomeLayOut from '../components/Home/HomeLayOut';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import CartDetail from '../components/CartDetail';
import NotfoundPage from '../components/Home/NotfoundPage';


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <HomeLayOut /> } />
                <Route path="/:id" element={<ItemListContainer />} />
                <Route path="/detalles/:name/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<CartDetail />}/>
                <Route path="*" element={<NotfoundPage /> } />
            </Routes>
        </>
    )
}

export default AppRouter;

/*

    if(){

    }

    (condicion === condicion2) ? resultado true : false

    funcion(item && item.id)

    
*/
