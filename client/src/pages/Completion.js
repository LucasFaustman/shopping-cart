import Navbar from "../components/Navbar"
import { resetCart } from '../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'

export default function Completion() {
    const dispatch = useDispatch()
    dispatch(resetCart())
    return (
        <section>
            <Navbar />
            <h2>Thank you for your order!</h2>
            <a href="/"><button className="btn btn-primary">Go back to shop</button></a>
        </section>
    )
}