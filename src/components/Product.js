// src/components/Product.js

import React from 'react'

const Product = (props) => {

    const deleteProduct = () => {
        props.deleteProductFromProductList(props.index)
    }

    const addToCart = () => {
        props.addProductToCart(props.index)
    }

    const removeFromCart = () => {
        props.removeProductFromCart(props.index)
    }

    const showOptions = () => {
        const viewMode = props.viewMode

        const adminOptions = (
            <div>
                <button onClick={deleteProduct}>Delete</button>
            </div>
        )
        const showOptions = (
            <div>
                <button onClick={addToCart}>Add To Cart</button>
            </div>
        )
        const cartOptions = (
            <div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        )
        switch (viewMode) {
            case 'ADMIN':
                return adminOptions
            case 'SHOP':
                return showOptions
            case 'CART':
                return cartOptions
            default:
                return null
        }
    }
        const product = props.product
        const description = props.description
        const price = props.price

        return (
            <div className="product-display">
                <h3>{product}</h3>
                <div>{description}</div>
                <div>{price}</div>

                {showOptions()}
            </div>
        )
    }


export default Product

// ALTERNATIVE WAY TO WRITE THIS WHEN YOU DON'T HAVE STATE, it's a stateless
// function: import React, {Component} from 'react' const