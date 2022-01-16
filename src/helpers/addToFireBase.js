import { addDoc, collection, getFirestore } from 'firebase/firestore';

const addToFireBase = ( items ) => {

    const order = {
        buyer: {name: "Jhon", phone: 1111, email: "mail@gmail.com"},
        items: items,
        total: items.map(item => {
            let sum = 0;
            sum += (item.price*item.quantity);

            return sum;
        })
    }

    console.log(order)

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    const setOrderId = (id) => {
        order.id = id;
    }

    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
}

export default addToFireBase;
