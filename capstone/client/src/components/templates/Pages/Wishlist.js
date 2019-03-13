import React, { Component } from 'react'
import WishlistProducts from '../../organisms/WishlistProducts';



const metaData = {
    title: 'Wishlist',
    link: '/wishlist'
};

class Wishlist extends Component {
    render() {
        // console.log("Render Wishlist");
        return (
            <div className="container cart-container">
                <h3 className="cart-heading">Liked</h3>
                <WishlistProducts />

            </div>
        )
    }
}
export default Wishlist;
export { metaData };