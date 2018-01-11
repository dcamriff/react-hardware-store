// src/components/Product.js

import React from 'react'

const Product = (props) => {

    const deleteProduct = () => {
        props.deleteProductFromProductList(props.index)
    }

    return (
        <div>
            <h3>{props.productName}</h3>
            <div>{props.description}</div>
            <div>{props.price}</div>
            <button onClick={deleteProduct}>
                Delete {props.productName}
            </button>
        </div>
    )
}

export default Product

// ALTERNATIVE WAY TO WRITE THIS WHEN YOU DON'T HAVE STATE, it's a stateless function:
// import React, {Component} from 'react'

// const 