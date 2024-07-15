import { Link } from 'react-router-dom';
import './styles/desktop.css'
import { useSelector } from 'react-redux';

function Product({ product_data, comment }) {
    // const link = product_data['link']
    const padel = useSelector((state) => state.ws).padel

    const paramsURL = new URLSearchParams({ data: JSON.stringify(product_data) }).toString();
    const url = padel ?product_data['link']: `{/product/${paramsURL}}`

    return (
        <Link className="product"
            to={url}
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
