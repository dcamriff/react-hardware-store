// This will be our wrapper compenent src/components/ProductList.js

import React from 'react'

import Product from './Product'

const ProductList = (props) => {
    const productList = props.productList

    const productComponents = productList.map((product, index) => {
        return <Product
            viewMode={props.viewMode}
            product={product.product}
            description={product.description}
            price={product.price}
            key={index}
            id={product.id}
            deleteProductFromProductList={props.deleteProductFromProductList}
            addProductToCart={props.addProductToCart}
            removeProductFromCart={props.removeProductFromCart}/>
    })

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default ProductList