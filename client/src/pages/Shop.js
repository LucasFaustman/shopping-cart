import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cart/cartSlice';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";




export default function Shop({products}) {
    const dispatch = useDispatch()
    const productList = products.map(item => {
        return  <div className="card col-md-4 gx-5 gy-5" key={item.sku}>
                    <img className="card-img-top" src={`${item.image.url}`} alt={`${item.name}`}></img>
                    <div className="card-body">
                    <Link to={`/shop/${item.sku}`}>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price.raw}</p>
                </Link>
                <button onClick={() => dispatch(addToCart({id: item.sku, title: item.name, image: item.image.url, price: item.price.raw}))}
                     type='button' 
                     className="btn btn-primary">
                         Add To Cart
                </button>
            </div>
            
        </div>
    })
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <h2>Shop Our Collection</h2>
                    <div className="row">
                        {productList}
                    </div>
            </div>
            <Footer />
        </div>
    )
}