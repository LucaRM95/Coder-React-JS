import { useEffect, useState } from 'react';
import getItem from '../helpers/getItem';

const useFetch = ( categoria="remeras-skate" ) => {

    const [item, setItem] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getItem( categoria )
            .then( productos => {
                setItem({
                    data: productos,
                    loading: false
                });
            })
            .catch( () => {
                alert("Hubo un problema al realizar la busqueda");
            })
    }, [categoria])

    return item;
}

export default useFetch;
