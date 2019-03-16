import React, { Component } from 'react'
import OrderDetails from '../../organisms/OrderDetails';

const metaData = {
    title: 'Orders',
    link: '/orders'
};

class Orders extends Component {

    render() {
        return (
            <div className="container checkout-container">
                <h3>My Orders</h3>
                <OrderDetails />
            </div>
        )
    }
}

export default Orders;
export { metaData };