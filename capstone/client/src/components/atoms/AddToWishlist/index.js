import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateWishlist } from '../../../actions/wishlist'
import './index.scss';

class AddToWishlist extends Component {
    addToWishlist() {
        let { actions, user, wishlistObj } = this.props;
        let wishlist = JSON.parse(JSON.stringify(user.wishlists));
        let wishlistId = wishlist.id;
        let isAlreadyAdded = false;
        console.log(wishlistObj);
        wishlist.products = wishlist.products.filter((value, key) => {
            console.log(value);
            if (value.product === wishlistObj.product) {
                isAlreadyAdded = true;
                return false;
            } else {
                return true;
            }
        });
        /*cart.products.map((product) => {
            if (product.productDetails) {
                delete product.productDetails;
            }
            return product;
        });*/
        if (!isAlreadyAdded) {
            wishlist.products.push(wishlistObj);
        }

        //cart.userId = user.id;
        delete wishlist.id;
        console.log("=========wishlist====");
        console.log(wishlist);
        actions.updateWishlist(wishlistId, wishlist);
    }
    render() {
        return (
            <button className="btn btn-danger" onClick={(e) => this.addToWishlist()}>+</button>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ updateWishlist }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(AddToWishlist);


