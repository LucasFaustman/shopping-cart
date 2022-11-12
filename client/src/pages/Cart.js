import { useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Total from "../components/Total"
import Navbar from "../components/Navbar"


export default function Cart() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const CartItems = cart.map(item => {
        return   <div key={item.id} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
            <div className="mr-1">
                <img className="rounded" src={`${item.image}`} alt={`${item.title}`} width="70"/>
            </div>
            <div className="d-flex flex-column align-items-center product-details">
                <Link to={`/shop/${item.id}`}>
                <span className="font-weight-bold">{item.title}</span>
                </Link>
            </div>
        <div className="d-flex flex-row align-items-center qty"> 
            <button className="btn" onClick={() => dispatch(decrementQuantity(item.id))}>
                <i className="fa fa-minus text-danger"></i>
            </button>
                <h5 className="text-grey mt-1 mr-1 ml-1">{item.quantity}</h5><button className="btn" onClick={() => dispatch(incrementQuantity(item.id))}><i className="fa fa-plus text-success"></i></button>
        </div>
        <div>
            <h5 className="text-grey">${item.price}</h5>
        </div>
        <div className="d-flex align-items-center">
            <button className="btn" onClick={() => dispatch(removeItem(item.id))}><i className="fa fa-trash mb-1 text-danger"></i></button>
        </div>
    </div>
    })
    return (
        <div>
            <Navbar />
            {cart.length 
            ? 
                <div className="container mt-5 mb-5">
                    <div className="d-flex justify-content-center row">
                        <div className="col-md-12">
                            <div className="p-2">
                                <h4>Shopping Cart</h4>
                            </div>
                    {CartItems}
                        </div>
                    </div>
                    <div>
                        <Total />
                        <a className="mt-5" href="/payment"> <button className="btn btn-primary">Check Out</button></a>
                    </div>
                </div> 
            : 
                <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
                    <h4>Your cart is empty!</h4>
                    <a className="mt-5" href="/shop"> <button className="btn btn-primary">Shop Now</button></a>
                </div>
            }
        </div>
    )
}