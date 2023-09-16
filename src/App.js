import "./App.css";
import Homepage from "./pages/Homepage";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import { Suspense } from "react";
import Alert from "./UI/Alert";
import Product from "./components/Product";
import CheckOut from "./components/CheckOut/CheckOut";
import { sliceAction } from "./feautures/Store";

import { useDispatch, useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from "./components/CheckOut/Success";
import AuthGuard from "./components/AuthGuard/AuthGuard";

const Error = React.lazy(() => import("./components/Error"));
const SingleProducts = React.lazy(() => import("./components/SingleProducts"));
const Whistlist = React.lazy(() => import("./components/Whistlist"));
const Cart = React.lazy(() => import("./components/Cart"));
const Clothes = React.lazy(() => import("./components/Clothes"));
const Acessories = React.lazy(() => import("./components/Acessories"));
const Login = React.lazy(() => import("./components/Login"));
const ResultPage = React.lazy(() => import("./components/ResultPage"));

function App() {
  const [clientSecret, setClientSecret] = useState("");

  const dispatch = useDispatch();

  const stripePromise = loadStripe(
    "pk_test_51NpefaHp8cBzngtt3RqLqIVAcDC2NX37elgd4bG6o2y7jbycqH6OgmkD4VhuQI2ssCve6bbK639AODEau9bfAf9M00C8sLFngd"
  );

  const cart = useSelector((state) => state.cart);
  const success = useSelector((state) => state.success)

  useEffect(() => {
    if (cart.length >= 1) {
      fetch(`http://localhost:4242/checkout?random=${Math.random()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: cart }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        }).catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [cart]);

  return (
    <div className="App">
      <div className="nav">
        <NavBar />
        <Search />
        <Alert />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="products"
          element={
            <Suspense fallback={<div>...</div>}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="products/:productId"
          element={
            <Suspense fallback={<div>...</div>}>
              <SingleProducts />
            </Suspense>
          }
        />
        <Route
          path="wishlist"
          element={
            <Suspense fallback={<div>...</div>}>
              <Whistlist />
            </Suspense>
          }
        />
        <Route
          path="clothes"
          element={
            <Suspense fallback={<div>...</div>}>
              <Clothes />
            </Suspense>
          }
        />
        <Route
          path="accessories"
          element={
            <Suspense fallback={<div>...</div>}>
              <Acessories />
            </Suspense>
          }
        />
        <Route
          path="results"
          element={
            <Suspense fallback={<div>...</div>}>
              <ResultPage />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<div>...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="cart/checkout"
          element={
            <AuthGuard checkedOut={cart.length >= 1}>
              <Suspense fallback={<div>...</div>}>
                {stripePromise && clientSecret && (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckOut />
                  </Elements>
                )}
              </Suspense>
            </AuthGuard>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense fallback={<div>...</div>}>
              <Error />
            </Suspense>
          }
        />
        <Route
          path="/success"
          element={
              <Suspense fallback={<div>...</div>}>
                <Success />
              </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
