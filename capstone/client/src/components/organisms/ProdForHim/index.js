import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadProducts } from '../../../actions/products'
import './index.scss'
import Carousel from '../Carousel';

import { images } from '../../../utilities/imgimport'
class ProdForHim extends Component {
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
  renderProducts(products) {
    return products.map((val, idx) => {
      let imgObj = val.variants[0].images.filter((image) => image.isDefault);
      let imgName = imgObj[0].path.split('/').pop();

      return (
        <div key={idx}>
          <img src={images[imgName]} alt={val.name} className="img-responsive" style={{ maxWidth: '100%' }} />
          <div className="carousel-caption">
            <p className="cat-head">{val.name}</p>
            {/* <p className="cat-head">{val.price}</p> */}
          </div>
        </div>
      )
    })
  }
  render() {
    let { products } = this.props;
    let { carouselSettings } = this.state;
    let subCatName = 'men'
    let productsArr = products.filter((product) => product.subcategory.toLowerCase() === subCatName)
    let slides = this.renderProducts(productsArr);
    return (
      <div>
        {slides ? <Carousel heading="For Him" settingParam={carouselSettings} carouselSlides={slides} /> : ''}
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

export default connectToStore(ProdForHim);

