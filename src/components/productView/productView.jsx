import { useLocation, useParams } from 'react-router-dom'
import './styles/desktop.css'

function ProductView() {
    let { data } = useParams()
    data = data.split("=")[1]
    data = data.replace(/\+/g, " ");
    data = JSON.parse(data)
    let features = JSON.parse(data['features'])

    features = Object.keys(features).map(key => {
        return (<text style={{ marginBottom: 5 }}>
            <b>{key}: </b> {'| '}{features[key].map(item => { return `${item} | `})}
        </text>);
    })

    return (
        <div className="productView">
            <h1 style={{ marginTop: 20, marginBottom: 0 }}>
                {`${data['name']} [${data['id']}]`}
            </h1>
            <text style={{ marginBottom: 20 }}>
                {`${data['price_eur']} €`}
            </text>

            <text style={{ marginBottom: 5 }}>
                <b>Description:</b> {data['description']}
            </text>

            {features}
            <h2 style={{ marginBottom: 5 }}>
                Details
            </h2>

            <text>
                <b>Query similarity:</b> {` ${(data["similarity"] * 100).toFixed(2)}%`}
            </text>
        </div>
    )
}
export default ProductView