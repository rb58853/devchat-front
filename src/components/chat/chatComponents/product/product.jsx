import { Link, useNavigate } from 'react-router-dom';
import './styles/desktop.css'
function Product({ product_data, comment }) {
    const link = product_data['link']
    const paramsURL = new URLSearchParams({ data: JSON.stringify(product_data) }).toString();

    return (
        <Link className="product"
            to={`/product/${paramsURL}`}
        >
            <div className="productSpace">
                img
            </div>

            <text className='productName'>
                {product_data['name']}
            </text>
            <div className='line' />

            <text className='productComment'>
                {comment}
            </text>

        </Link>
    )

}
export default Product
