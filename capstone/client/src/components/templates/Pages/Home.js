import React, { Component } from 'react'
import CategoryList from '../../organisms/CategoryList';


import AddToCartBtn from '../../atoms/AddToCartBtn';
import RemoveFromCartBtn from '../../atoms/RemoveFromCartBtn';

const metaData = {
  title: 'Home',
  link: '/home',
  isFooterLink: true
};

class Home extends Component {

  render() {
    let prodObj = { product: "5c7bf86aa67be71fd06fabe4", sku: "buckle_bag_frey", qty: 1 };
    return (
      <div>
        <CategoryList />
        <AddToCartBtn productObj={prodObj} />
        <RemoveFromCartBtn productObj={prodObj} />
      </div>
    )
  }
}

export default Home;
export { metaData };