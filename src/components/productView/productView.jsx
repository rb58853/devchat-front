import { useLocation } from 'react-router-dom';
import './styles/desktop.css'

function ProductView() {
    let location = useLocation();
    let product_data = location.state.data;

    return (
        <div className="productView">
            <text>
                {product_data}
            </text>
            {/* <h1>
                {product_data['name']}
            </h1>
            <text>
                {`query similarity: ${product_data["similarity"]}`}
            </text>
            <p>
                {product_data['description']}
            </p>
            <p>
                {product_data['features']}
            </p> */}
        </div>
    )
}
export default ProductView