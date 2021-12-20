import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={ <ItemListContainer marginTop="mt-5" /> } />
                <Route exact path="/:id" element={<ItemListContainer marginTop="mt-5" />} />
                <Route exact path="/:id" element={<ItemListContainer marginTop="mt-5"  />} />
                <Route exact path="/remeras/:id" element={<ItemListContainer marginTop="mt-5"  />} />
                <Route exact path="/remeras/:id" element={<ItemListContainer marginTop="mt-5"  />} />
            </Routes>
        </>
    )
}

export default AppRouter;
