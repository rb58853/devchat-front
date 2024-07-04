import './styles/desktop.css'
function Product({ product_data, comment }) {
    // const link = product_data['link']
    const link = "link/to/testing"

    return (
        <div className="product">
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

        </div>
    )

}
export default Product
