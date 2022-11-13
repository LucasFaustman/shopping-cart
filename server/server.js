const e = require("express");
const express = require("express");
const app = express();
const env = require("dotenv").config();
// server/index.js
const path = require('path');
const PORT = process.env.PORT

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
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

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));