import React, { Component } from 'react'
import OrderProduct from '../../molecules/OrderProduct';
import Header from '../../organisms/Header';

const metaData = {
    title: 'Checkout',
    link: '/Checkout'
};

class Checkout extends Component {
    constructor(props) {
        super(props);
    }
    renderOrderProducts(orderData) {

        return orderData.products.map((val, idx) => {
            return (
                <div key={idx}>
                    <OrderProduct product={val} />
                    <hr />
                </div>
            )
        })


    }
    render() {
        let { location } = this.props;
        let orderData = location.state.orderData;
        return (
            <div>
                <Header heading="Order Details" />
                <div className="container checkout-container">
                    <div className="alert alert-success ">Your order is successful</div>
                    <p><span>Order Id: </span><span>{orderData.id}</span></p>
                    <p><span>Total Amount: </span><span>&#x20b9;{orderData.totalAmount}</span></p>
                    <hr />
                    <div className="order-products">
                        {this.renderOrderProducts(orderData)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout;
export { metaData };