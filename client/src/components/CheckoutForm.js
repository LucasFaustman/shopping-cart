import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux'
import Total from "../components/Total"
import Footer from "./Footer";
import { Link } from "react-router-dom";



export default function CheckoutForm() {
  const cart = useSelector((state) => state.cart)
  const [email, setEmail] = useState('');

  const CartItems = cart.map(item => {
    
    return   <div key={item.id} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
    <div className="mr-1">
        <img className="rounded" src={`${item.image}`} alt={`${item.title}`} width="70"/>
    </div>
    <div className="d-flex flex-column align-items-center product-details">
    <Link to={`/shop/${item.id}`}>  <span className="font-weight-bold">{item.title}</span>  </Link>
    </div>
    <div>
        <h5 className="text-grey">${item.price}</h5>
    </div>
    <div>
        <h5 className="text-grey">Qty: {item.quantity}</h5>
    </div>
</div>

  })

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
        receipt_email: email,
      }
        })
      
      if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage(`Payment status: ${paymentIntent.status} `)
    } else {
      setMessage('An unexpected error has occured. Please try again.')
    }
    setIsProcessing(false);
  };

  return (
    <div className="container-responsive h-100">
      <div className="row flex-wrap h-100">
        <section className="col-6 bg-light">
          <h1>Checkout</h1>
            {CartItems}
            <span className="float-right pr-3 pt-3"><Total /></span>
        </section>
        <section className="col-6">
          <form id="payment-form" onSubmit={handleSubmit}>
          {!isProcessing && <div className="form-group p-3">   
            <label className="float-left">Email</label>
            <input
              id="email"
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />
          </div>}
            <PaymentElement id="payment-element" className="p-3" />
            <button className="btn btn-primary mt-3" disabled={isProcessing || !stripe || !elements || !email} id="submit">
              <span id="button-text">
                {isProcessing ? "Processing ... " : "Pay now"}
              </span>
            </button>
            {!isProcessing && <ul className="mt-2">
              <li>Please use 4242 4242 4242 4242 for card number</li>
              <li>04/34 Expiry Date</li>
              <li>400 CVC</li>
              <li>M5T T14 Postal Code</li>
            </ul>}
            {message && <div id="payment-message" className="text-danger">{message}</div>}
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}