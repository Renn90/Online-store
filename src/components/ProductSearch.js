import React from 'react'
import ProductItem from './ProductItem'
import style from '../Styles/ProductSearch.module.scss'

const ProductSearch = ({filteredData}) => {
  return (
    <div className={style.container}>
      <h3>Search results for "{filteredData}"</h3>
      <p className={style.text}>If you are not happy with the results below please do another search..</p>
      <ProductItem filteredData={filteredData}/>
    </div>
  )
}

export default ProductSearch
