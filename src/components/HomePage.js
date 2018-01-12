import React, {Component} from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'

class HomePage extends Component {

    constructor() {
        super()

        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
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
            ]
        }
    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem})
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        this.setState({itemCurrentlyOnSale})
    }

    _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList]
        productList.push(newProduct)
        this.setState({productList})
    }

    deleteProductFromProductList = (index) => {
        const productList = [...this.state.productList]
        productList.splice(index, 1)
        this.setState({productList})
    }

    render() {

        return (
            <div>

                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <span>
                        <button onClick={this.toggleEditSaleItem}>
                            {this.state.editSaleItem
                                ? 'Hide'
                                : 'Edit Sale Item'}
                        </button>
                    </span>

                    {this.state.editSaleItem
                        ? <div>
                                <input
                                    onChange={this.handleItemCurrentlyOnSaleChange}
                                    value={this.state.itemCurrentlyOnSale}
                                    type="text"/>
                            </div>
                        : null
}

                    <AdminView
                        productList={this.state.productList}
                        addNewProductToProductList={this.addNewProductToProductList}/>

                    {/* <ShopView /> */}

                </div>
            </div>
        )
    }
}

export default HomePage

// You can not define a const in a class that's why you don't see const
// toggleEditSaleItem. That's where we are here. So this is a custom method
// below. It's telling us make a new item called SaleItem and then we are
// bringing in really important method called this.setState which changes the
// state. this.setState({editSaleItem}) is a pure function, meaning it is
// stateless. Reads: Go take my state, and change it to editSaleItem. It is
// deleting the old state and replacing with new state. When our state changes,
// the page automatically updates. inside return statement, the
// {this.state.editSaleItem...} is a ternary statement. The ? something : makes
// it a ternary statement
// Note: The input is a "controlled" input. We tell it what to do when it
// changes. WE HAVE ORGANIZED THIS PROJECT SO THAT HOMEPAGE BECOMES TOP VIEW SO
// THAT KINDA TAKES PLACE OF WHAT WE'D USE APP.JS FOR