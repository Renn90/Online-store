import React from "react";
import style from "../Styles/ProductItem.module.scss";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ResultPage = ({ filteredData }) => {
  const searchArray = useSelector((state)=> state.searchArray)
  const inputValue = useSelector((state)=> state.inputValue)

  return (
    <div className={style.mainContt}>
      <div className={style.header}>
      {searchArray.length > 0 &&
        <div className={style.arrivals}>
          <h3>Search results for '{inputValue}'</h3>
          <p>
            If you are not satisfied with the results below please do another
            search..
          </p>
        </div> }
      </div>
      <>
      {searchArray.length > 0 && <ProductItem sort='search'/> }
      {searchArray.length <= 0 &&  inputValue.trim().toLowerCase() !== '' && <div>
        <h3 className={style.text}>No products found for this search</h3>
      </div> }
      {inputValue.trim().toLowerCase() === '' && <div>
        <h2 className={style.text}>Please enter a valid search to find products</h2>
        </div>}
       </>
    </div>
  );
};

export default ResultPage;
