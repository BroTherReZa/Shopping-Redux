import React from 'react'
import Controls from '../../components/Controls/Controls'
import Order from '../../components/Order/Order'
import Modal from '../../components/UI/Modal/Modal'
import Wrapper from '../../hoc/Wrapper'

const prices = {
    product1: 20,
    product2: 30,
    product3: 40,
    product4: 50,
}
class Shopping extends React.Component {
    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
        },
        totalPrice: 0,
        purchased: false,
    }
    addProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount + 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount
        // mohasebe tedad har mahsol
        const priceAdd = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice + priceAdd

        this.setState({
            totalPrice:newPrice,
            products: updatedProducts
        })
        //console.log(newPrice)
    }
    removeProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount - 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount
        // mohasebe tedad har mahsol
        const priceSub = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice - priceSub

        this.setState({
            totalPrice:newPrice,
            products: updatedProducts
        })
        //console.log(newPrice) 
    }
    purchasedHandler = ()=>{
        this.setState({ purchased : true })
    }
    modalCloseHandler = () => {
        this.setState({ purchased : false})
    }
    purchasedContinueHandler = () => {
        console.log('continue')
    }
    render(){
        return(
            <Wrapper>
                <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
                    <Order 
                    products={this.state.products}
                    total={this.state.totalPrice}
                    continue={this.purchasedContinueHandler} 
                    cancel={this.modalCloseHandler} 
                    />
                </Modal>
                <Controls 
                    productAdd={this.addProductHandler}
                    productRemove={this.removeProductHandler}
                    total={this.state.totalPrice}
                    order={this.purchasedHandler}
                />
            </Wrapper>
        )
    }
}


export default Shopping