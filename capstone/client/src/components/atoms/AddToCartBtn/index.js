import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateCart } from '../../../actions/cart'
import './index.scss';

class AddToCartBtn extends Component {
    addToCart() {
        let { actions, user, productObj } = this.props;
        let cart = JSON.parse(JSON.stringify(user.carts));
        let cartId = cart.id;
        /*cart.products.map((product) => {
            if (product.productDetails) {
                delete product.productDetails;
            }
            return product;
        });*/
        cart.products.push(productObj);
        //cart.userId = user.id;
        delete cart.id;
        actions.updateCart(cartId, cart);
    }
    render() {
        return (
            <button className="btn btn-danger" onClick={(e) => this.addToCart()}>Add to cart</button>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ updateCart }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(AddToCartBtn);


