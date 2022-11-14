import { Link } from "react-router-dom"

export default function BestSellers({products}) {
    const productList = products.slice(0,3).map(item => {
        return <div className="col-md-3 gx-5 gy-5" key={item.sku}>
             <Link to={`/shop/${item.sku}`}>
            <img className="card-img-top rounded" src={`${item.image.url}`} alt={`${item.name}`}></img>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price.raw}</p>
                
            </div>
            </Link>
        </div>
    })
    return (
        <section className="bg-light">
            <h2>Shop Our Best Sellers</h2>
            <div className="row justify-content-center">
                    {productList}
                </div>
        </section>

    )

}