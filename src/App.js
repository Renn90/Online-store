import "./App.css";
import Homepage from "./pages/Homepage";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import { Suspense } from "react";
const ProductItem = React.lazy(() => import("./components/ProductItem"));
const Error = React.lazy(() => import( "./components/Error"));
const SingleProducts = React.lazy(() => import("./components/SingleProducts"));
const Whistlist = React.lazy(() => import( "./components/Whistlist"));
const Cart = React.lazy(() => import( "./components/Cart"));
const Clothes = React.lazy(() => import( "./components/Clothes"));
const Acessories = React.lazy(() => import("./components/Acessories"));
const Login = React.lazy(() => import( "./components/Login"));
const ResultPage = React.lazy(() => import("./components/ResultPage"));



function App() {
  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState("");
  const filter = () => {
    navigate("/results");
  };

  return (
    <div className="App">
      <div className="nav">
        <NavBar />
        <Search filter={filter} setFilteredData={setFilteredData} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              filter={filter}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
            />
          }
        />
        <Route
          path="products"
          element={ <Suspense fallback={<div>...</div>}><ProductItem filteredData={filteredData} /></Suspense>}
        />
        <Route path="products/:productId" element={<Suspense fallback={<div>...</div>}><SingleProducts /></Suspense>} />
        <Route path="wishlist" element={<Suspense fallback={<div>...</div>}><Whistlist /></Suspense>} />
        <Route path="clothes" element={<Suspense fallback={<div>...</div>}><Clothes /></Suspense>} />
        <Route path="accessories" element={<Suspense fallback={<div>...</div>}><Acessories /></Suspense>} />
        <Route
          path="results"
          element={<Suspense fallback={<div>...</div>}><ResultPage filteredData={filteredData} /></Suspense>}
        />
        <Route path="login" element={<Suspense fallback={<div>...</div>}><Login /></Suspense>} />
        <Route path="cart" element={<Suspense fallback={<div>...</div>}><Cart /></Suspense>} />
        <Route path="/*" element={<Suspense fallback={<div>...</div>}><Error /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
