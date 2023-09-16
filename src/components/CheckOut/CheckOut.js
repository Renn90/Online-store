import React, { useEffect, useState } from "react";
import style from '../../Styles/CheckOut.module.scss'
import { useSelector } from "react-redux";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckOut = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const cart = useSelector((state)=> state.cart)
  const total = useSelector((state)=> state.total)
  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);
  const purchaseHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success",
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h4 style={{color: '#795b23'}}>Summary</h4>
        <p>The total cost consist of the tax, insurance and shipping fee</p>
        <hr />
       {cart.map((item)=>(
        <div className={style.items} key={item.id}>
          <p>{item.title} x {item.amount}</p>
          <h6>{item.price}</h6>
          </div>
       ))}
       <span className={style.shipping}>
         <p>shipping</p>
         <h6><s>$2</s></h6>
       </span>
       <hr />
       <h4 className={style.total}>${total}</h4>
      </div>
      {cart.length >= 1 ? (
        <form onSubmit={purchaseHandler} id="payment-form">
          <PaymentElement id="payment-element" />
          <button disabled={!stripe || isLoading || !elements} className="Cbutton">
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </form>
      ) : (
        <div style={{marginTop: '190px'}}>
          <h1>Your cart total is less than 1</h1>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
