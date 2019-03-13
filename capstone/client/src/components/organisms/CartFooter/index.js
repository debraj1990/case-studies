import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss';

class CartFooter extends Component {

    calculateCartTotal() {
        let { cart } = this.props;
        // console.log("Cart footer");
        // console.log(cart);
        let totalAmount = 0;
        for (var i = 0; i < cart.products.length; i++) {
            let productPrice = parseFloat(cart.products[i].productDetails.variants[0].sale_price);
            totalAmount += productPrice;
        }
        return totalAmount;
    }

    render() {
        return (
            <div className="cart-footer row">
                <div className="col-9">
                    <button className="btn btn-danger">Checkout</button>
                </div>
                <div className="col-3">
                    <span className="cart-total-amnt">Total: &#x20b9;{this.calculateCartTotal()}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    cart: state.cart
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps
)

export default connectToStore(CartFooter);

