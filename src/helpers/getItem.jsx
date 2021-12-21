
const getItem = async ( categoria ) => {
    
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${categoria}`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    const item  = results.map(product => {
        return{
            id: product.id,
            title: product.title,
            price: product.price,
            stock: product.sold_quantity,
            url: product.thumbnail
        } 
    });
    
    
    return item;
}

export default getItem;
