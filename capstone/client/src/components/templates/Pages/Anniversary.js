import React, { Component } from 'react'
import ProdForHer from '../../organisms/ProdForHer';
import ProdForHim from '../../organisms/ProdForHim';
import Trending from '../../organisms/Trending';
import Header from '../../organisms/Header';


const metaData = {
  title: 'Anniversary',
  link: '/anniversary',
  isFooterLink: true
};

class Anniversary extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProdForHer />
        <ProdForHim />
        <Trending />
      </div>
    )
  }
}
export default Anniversary;
export { metaData };