import { useLocation, useParams } from 'react-router-dom'
import './styles/desktop.css'

function ProductView() {
    let { data } = useParams()
    data = data.split("=")[1]
    data =  data.replace(/\+/g, " ");
    data = JSON.parse(data)

    return (
        <div className="productView">
            <h1
                // style={{ placeSelf: 'center' }}
            >
                {data['name']}
            </h1>
            <text>
                {`query similarity: ${(data["similarity"]*100)}%`}
            </text>
            <p>
                {data['description']}
            </p>
            <p>
                {data['features']}
            </p>
        </div>
    )
}
export default ProductView