import React, {Component} from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class HomePage extends Component {

    constructor() {
        super()

        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: false,
            showAdminView: false,
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Itsa hammer',
                    price: 12.3
                }, {
                    productName: 'Nail',
                    description: 'Itsa nail',
                    price: 0.12
                }
            ],
            cartList: []
        }
    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem
        this.setState({editSaleItem})
    }

    toggleAdminView = () => {
        const showAdminView = !this.state.showAdminView
        this.setState({showAdminView})
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        this.setState({itemCurrentlyOnSale})
    }

    addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList]

        productList.push(newProduct)
        this.setState({productList})
    }

    deleteProductFromProductList = (index) => {
        const productList = [...this.state.productList]
        productList.splice(index, 1)
        this.setState({productList})
    }

    addProductToCart = (idToAddToCart) => {
        const cartList = [...this.state.cartList]
        const product = {
            ...this.state.productList[idToAddToCart]
        }

        cartList.push(product)

        this.setState({cartList})
    }

removeProductFromCart = (idToRemove) => {
    const cartList = [...this.state.cartList]

    cartList.splice(idToRemove, 1)
    this.setState({cartList})
}

render() {
    const adminView = <AdminView
        productList={this.state.productList}
        addNewProductToProductList={this.addNewProductToProductList}
        deleteProductFromProductList={this.deleteProductFromProductList}/>

    const shopView = <ShopView
        productList={this.state.productList}
        addProductToCart={this.addProductToCart}/>

    return (
        <div>
            <div>
                <div id="home-page-nav">
                    <h1>My Hardware Store</h1>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>

                    <div>
                        {this.state.editSaleItem
                            ? <div>
                                    <input
                                        onChange={this.handleItemCurrentlyOnSaleChange}
                                        value={this.state.itemCurrentlyOnSale}
                                        type="text"/>
                                </div>
                            : null}
                    </div>
                    <div>
                        <button onClick={this.toggleEditSaleItem}>
                            {this.state.editSaleItem
                                ? 'Hide'
                                : 'Edit Sale Item'}
                        </button>
                    </div>
                    <div>
                        <button onClick={this.toggleAdminView}>
                            {this.state.showAdminView
                                ? 'Show Shop View'
                                : 'Show Admin View'}
                        </button>
                    </div>
                </div>
            </div>

            <div id="view-container">
                {this.state.showAdminView ? adminView : shopView}

                <CartView
                    productList={this.state.cartList}
                    removeProductFromCart={this.removeProductFromCart}/>
            </div>
        </div>
        )
    }
}
// //             /* {this.state.editSaleItem
// //                     ? <div>
// //                             <input
// //                                 onChange={this.handleItemCurrentlyOnSaleChange}
// //                                 value={this.state.itemCurrentlyOnSale}
// //                                 type="text"/>
// //                         </div>
// //                     : null

//         {/* <AdminView
//                     productList={this.state.productList}
//                     addNewProductToProductList={this.addNewProductToProductList}/> */}

export default HomePage
        
        // You can not define a const in a class that's why you don't see const
        // toggleEditSaleItem. That's where we are here. So this is a custom method
        // below. It's telling us make a new item called SaleItem and then we are
        // bringing in really important method called this.setState which changes the
        // state. this.setState({editSaleItem}) is a pure function, meaning it is
        // stateless. Reads: Go take my state, and change it to editSaleItem. It is
        // deleting the old state and replacing with new state. When our state changes,
        // the page automatically updates. inside return statement, the
        // {this.state.editSaleItem ...}