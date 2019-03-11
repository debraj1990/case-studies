import React, { Component } from 'react'
import Header from '../../organisms/Header';


const metaData = {
  title: 'Product Detail',
  link: '/product/:id',
  isFooterLink: true
};

class Productdetail extends Component {
  render() {
    let { history } = this.props;
    let prodId = history.location.pathname.split('/').pop();
    return (
      <div>
        <Header history={history} />
        Hello {prodId}
      </div>
    )
  }
}
export default Productdetail;
export { metaData };