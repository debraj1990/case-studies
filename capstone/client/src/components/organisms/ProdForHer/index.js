import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadProducts } from '../../../actions/products'
import './index.scss'
import Carousel from '../Carousel';
class ProdForHer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselSettings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }

  componentDidMount() {
    let { catId, actions } = this.props;
    actions.loadProducts(catId);
  }
  render() {
    let { products } = this.props;
    let { carouselSettings } = this.state;
    products = products.filter((product) => product.subcategory.toLowerCase() === 'women')
    return (
      <div>
        <Carousel heading="For Her" products={products} settingParam={carouselSettings} />
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  products: state.products
})
const mapDispatchToProps = dispatch => ({
  // ... normally is an object full of action creators
  actions: bindActionCreators({ loadProducts }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connectToStore(ProdForHer);

