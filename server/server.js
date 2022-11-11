const e = require("express");
const express = require("express");
const app = express();
const env = require("dotenv").config();
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (cart) => {

  let totalPrice = 0
  cart.forEach(item => {
    totalPrice += item.price * item.quantity
  })
  return totalPrice.toFixed(2).split('.').join('')
};

app.get("/config", (req,res) => {
    res.send({
        publishableKey: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY
    })
})

app.post("/create-payment-intent", async (req, res) => {
  console.log(req.body)
  const cart = req.body;

try{  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(cart),
    currency: "cad",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
} 
  
  catch(err) {
    return res.status(400).send({
      error: err.message
    })
  }
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));