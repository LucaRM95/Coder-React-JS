import { Routes, Route } from 'react-router-dom';
import HomeLayOut from '../components/Home/HomeLayOut';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <HomeLayOut /> } />
                <Route path="/:id" element={<ItemListContainer />} />
                <Route path="/detalles/:name/:id" element={<ItemDetailContainer />} />
            </Routes>
        </>
    )
}

export default AppRouter;
