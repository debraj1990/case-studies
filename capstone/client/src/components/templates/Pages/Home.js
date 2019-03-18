import React, { Component } from 'react'
import CategoryList from '../../organisms/CategoryList';
import Header from '../../organisms/Header';
// import store from '../../../store';


// import AddToCartBtn from '../../atoms/AddToCartBtn';
// import AddToWishlist from '../../atoms/AddToWishlist';
// import RemoveFromCartBtn from '../../atoms/RemoveFromCartBtn';

const metaData = {
  title: 'Home',
  link: '/home',
  isFooterLink: true
};

class Home extends Component {

  render() {

    return (
      <div>
        <Header heading="Explore" />
        <CategoryList />
      </div>
    )
  }
}

export default Home;
export { metaData };