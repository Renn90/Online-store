import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";

const Payment = () => {
  return (
    <form>
      <PaymentElement />
      <button>Pay now</button>
    </form>
  );
};

export default Payment;
