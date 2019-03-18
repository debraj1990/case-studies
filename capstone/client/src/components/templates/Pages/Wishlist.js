import React, { Component } from 'react'
import WishlistProducts from '../../organisms/WishlistProducts';
import Header from '../../organisms/Header';


const metaData = {
    title: 'Wishlist',
    link: '/wishlist'
};

class Wishlist extends Component {
    render() {
        return (
            <div>
                <Header heading="My Wishlist" />
                <div className="container cart-container">
                    <WishlistProducts />
                </div>
            </div>
        )
    }
}
export default Wishlist;
export { metaData };