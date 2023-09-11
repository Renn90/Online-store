import "./App.css";
import Homepage from "./pages/Homepage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import { Suspense } from "react";
import Alert from "./UI/Alert";
import Product from "./components/Product";
const Error = React.lazy(() => import( "./components/Error"));
const SingleProducts = React.lazy(() => import("./components/SingleProducts"));
const Whistlist = React.lazy(() => import( "./components/Whistlist"));
const Cart = React.lazy(() => import( "./components/Cart"));
const Clothes = React.lazy(() => import( "./components/Clothes"));
const Acessories = React.lazy(() => import("./components/Acessories"));
const Login = React.lazy(() => import( "./components/Login"));
const ResultPage = React.lazy(() => import("./components/ResultPage"));



function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavBar />
        <Search />
        <Alert />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage />
          }
        />
        <Route
          path="products"
          element={ <Suspense fallback={<div>...</div>}><Product /></Suspense>}
        />
        <Route path="products/:productId" element={<Suspense fallback={<div>...</div>}><SingleProducts /></Suspense>} />
        <Route path="wishlist" element={<Suspense fallback={<div>...</div>}><Whistlist /></Suspense>} />
        <Route path="clothes" element={<Suspense fallback={<div>...</div>}><Clothes /></Suspense>} />
        <Route path="accessories" element={<Suspense fallback={<div>...</div>}><Acessories /></Suspense>} />
        <Route
          path="results"
          element={<Suspense fallback={<div>...</div>}><ResultPage /></Suspense>}
        />
        <Route path="login" element={<Suspense fallback={<div>...</div>}><Login /></Suspense>} />
        <Route path="cart" element={<Suspense fallback={<div>...</div>}><Cart /></Suspense>} />
        <Route path="/*" element={<Suspense fallback={<div>...</div>}><Error /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
