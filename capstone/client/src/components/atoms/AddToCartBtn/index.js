import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateCart } from '../../../actions/cart'
import './index.scss';

class AddToCartBtn extends Component {
    addToCart(e) {
        e.preventDefault();
        let { actions, user, productObj } = this.props;
        let cart = JSON.parse(JSON.stringify(user.carts));
        let cartId = cart.id;

        cart.products.push(productObj);
        //cart.userId = user.id;
        delete cart.id;
        actions.updateCart(cartId, cart);
    }
    render() {
        let { loader } = this.props;
        return (
            <div>
                {loader ? <div className="loader"></div> : ''}
                <button className="btn btn-danger" onClick={(e) => this.addToCart(e)}>Add to cart</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    user: state.user,
    loader: state.loader
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


