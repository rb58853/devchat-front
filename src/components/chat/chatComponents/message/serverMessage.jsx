import Product from '../product/product'
import './styles/desktop.css'

function ServerMessage({ data }) {
    const header = data['products'].length > 0 ? data['nl']['head'] : data['response']
    let products = []

    if (data['products'].length > 0) {
        const nlProducts = data['nl']['products']
        products = nlProducts.map(product => (
            <Product key={product.id} product_data={getProductFromId(data['products'], product.id)} comment={product['comment']} />
        ))
    }

    return (
        <div className="serverMessage">
            
            {data && <Message products={products} header={header} />}
        </div>
    )
}
function Message({ products, header }) {
    return (
        <div>
            <text className='headerServer'>
                {header}
            </text>
            {
                products.length > 0 &&
                <div className='products'>
                    {products}
                </div>
            }
        </div>
    )
}


function getProductFromId(products, id) {
    // Utilizamos find para buscar en el array products
    // find retorna el primer elemento que cumple con la condición especificada
    const productFound = products.find(product => String(product.id) === String(id));

    // Si se encuentra un producto, find retornará ese producto,
    // de lo contrario, retornará undefined.
    // Podemos usar || para retornar null en caso de que find retorne undefined.
    return productFound || null;
}
export default ServerMessage