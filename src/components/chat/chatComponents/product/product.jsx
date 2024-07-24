import { Link } from 'react-router-dom';
import './styles/desktop.css'
import { useSelector } from 'react-redux';

function Product({ product_data, comment }) {
    // const link = product_data['link']
    const store = useSelector((state) => state.ws).store

    const paramsURL = new URLSearchParams({ data: JSON.stringify(product_data) }).toString();
    const url = store !== 'test_data' ? product_data['link'] : `{/product/${paramsURL}}`
    const image = ('images' in product_data && product_data['images'].length > 0) ? product_data['images'][0] : null

    return (
        <Link className="product"
            to={url}
        >
            <div className="productSpace">
                {image && <img src={image} className='imageProduct' />}
                {!image && 'img'}
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
