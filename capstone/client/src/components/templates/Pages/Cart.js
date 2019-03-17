import React, { Component } from 'react'
import CartProducts from '../../organisms/CartProducts';
import CartFooter from '../../organisms/CartFooter';
import Header from '../../organisms/Header';

const metaData = {
    title: 'Cart',
    link: '/cart'
};

class Cart extends Component {
    render() {
        return (
            <div>
                <Header heading="My Cart" />
                <div className="container cart-container">
                    <CartProducts />
                    <CartFooter />
                </div>
            </div>
        )
    }
}
export default Cart;
export { metaData };