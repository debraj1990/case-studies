import React, { Component } from 'react'
import OrderDetails from '../../organisms/OrderDetails';
import Header from '../../organisms/Header';

const metaData = {
    title: 'Orders',
    link: '/orders'
};

class Orders extends Component {

    render() {
        return (
            <div >
                <Header heading="My orders" />
                <OrderDetails />
            </div>
        )
    }
}

export default Orders;
export { metaData };