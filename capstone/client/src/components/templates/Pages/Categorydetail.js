import React, { Component } from 'react'
import ProdForHer from '../../organisms/ProdForHer';
import ProdForHim from '../../organisms/ProdForHim';
import Trending from '../../organisms/Trending';
import Header from '../../organisms/Header';


const metaData = {
  title: 'Category Listing',
  link: '/category/:id',
  isFooterLink: true
};

class Categorydetail extends Component {
  render() {
    let { history } = this.props;
    let catId = history.location.pathname.split('/').pop();
    return (
      <div>
        <Header history={history} />
        <ProdForHer catId={catId} />
        <ProdForHim catId={catId} />
        <Trending catId={catId} />
      </div>
    )
  }
}
export default Categorydetail;
export { metaData };