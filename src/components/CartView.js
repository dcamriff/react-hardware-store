import React from 'react'

import ProductList from './ProductList'

const CartView = (props) => {
    const productList = props.productList

    const totalPrice = productList.reduce((totalPrice, product) => {
        return totalPrice + product.price
    }, 0.00)

    return (
        <div className="small-view-box">
            <h1>Cart</h1>

            <ProductList
                productList={productList}
                viewMode={'CART'}
                addProductToCart={props.addProductToCart}
                removeProductFromCart={props.removeProductFromCart}/>
            <div>
                <h3>Total Price: {totalPrice}</h3>
            </div>
        </div>
    )
}

export default CartView