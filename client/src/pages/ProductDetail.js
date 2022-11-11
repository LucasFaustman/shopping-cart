import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cart/cartSlice';


export default function Home({products}) {
    const {productId} = useParams()
    const thisProduct = products.find(product => String(product.sku) === productId)


    const dispatch = useDispatch()

    return (
        <div>
            {thisProduct &&  <section className="d-flex flex-wrap pt-0">
                <section className="col-md-4 ">
                    <img className="img-fluid center-block " src={`${thisProduct.image.url}`} alt={`${thisProduct.name}`}/>
                </section>
               <section className="col-md-7">
                    <h1>{thisProduct.name}</h1>
                    <p>Price: ${thisProduct.price.formatted_with_code}</p>
                    <p>{thisProduct.description.replace(/<[^>]+>/g, '')}</p>
                    <button onClick={() => dispatch(addToCart({id: thisProduct.sku, title: thisProduct.name, image: thisProduct.image.url, price: thisProduct.price.raw}))} 
                    className="btn btn-primary">
                        Add To Cart
                    </button>
                </section>
            </section>}
        </div>
    )
}