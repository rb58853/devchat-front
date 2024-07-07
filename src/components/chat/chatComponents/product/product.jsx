import { useNavigate } from 'react-router-dom';
import './styles/desktop.css'
function Product({ product_data, comment }) {
    const link = product_data['link']
    let navigate = useNavigate()

    return (
        <button className="product"
            onClick={() => {
                navigate('/product', { state: { product_data } });
            }}
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

        </button>
    )

}
export default Product
