
const getItem = async () => {
    
    const url = "https://api.mercadolibre.com/sites/MLA/search?q=remera";
    const resp = await fetch( url );
    const { results } = await resp.json();

    console.log(results)
    
    const item  = results.map(product => {
        return{
            id: product.id,
            title: product.title,
            price: product.original_price,
            stock: product.sold_quantity,
            url: product.thumbnail
        } 
    });
    
    
    return item;
}

export default getItem;
