import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route exact path="/"><Navbar /></Route>
            </Routes>
        </>
    )
}

export default AppRouter;
