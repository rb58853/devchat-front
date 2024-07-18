import { useSelector } from 'react-redux'
import Product from '../product/product'
import './styles/desktop.css'
import ReactMarkdown from 'react-markdown';


function ServerMessage({ data }) {
    const ws = useSelector((state) => state.ws)
    const header = data['products'].length > 0 ? data['nl']['head'] : data['response']
    let products = []

    const debugmessages = data['debug'].split("|").map(item => {
        return <p>{item}</p>
    })
    const debugMessage = (
        <div>
            <h3>DEBUG</h3>
            {debugmessages}
            <p>{`api price: ${data['api_price']}`}</p>
        </div>
    )

    if (data['products'].length > 0) {
        const nlProducts = data['nl']['products']
        products = nlProducts.map(product => (
            <Product key={product.id} product_data={getProductFromId(data['products'], product.id)} comment={product['comment']} />
        ))
    }

    return (
        <div className="serverMessage">
            {data && <Message products={products} header={header} />}
            {ws.debug && debugMessage}
        </div>
    )
}
function Message({ products, header }) {
    return (
        <div>
            <ReactMarkdown className='headerServer'>
                {header}
            </ReactMarkdown>
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