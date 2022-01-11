import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebase/firebaseConfig";

const useFireBase = ( categoria="remeras" ) => {

    const [products, setProducts] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        const q = query(collection(db, "productos"), where("category", "==", categoria));
        getDocs(q).then(snapshot => {
            setProducts({
                data: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})),
                loading: false
            });
        }).catch( () => {
            alert("Hubo un problema al realizar la busqueda");
        });
        
    }, [categoria]);

    return products;
}

export default useFireBase;
