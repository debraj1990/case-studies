import React, { Component } from 'react'
import CategoryList from '../../organisms/CategoryList';


const metaData = {
  title: 'Home',
  link: '/home',
  isFooterLink: true
};

class Home extends Component {
  render() {
    return (
      <div>
        <CategoryList />
      </div>
    )
  }
}
export default Home;
export { metaData };