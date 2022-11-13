import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../components/CheckoutForm'
import { loadStripe } from "@stripe/stripe-js";


function Payment() {
  const cart = useSelector((state) => state.cart)
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config").then(async (res) => {
      const { publishableKey } = await res.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    }).catch(err => console.log(err)) 
  }, [cart]);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;