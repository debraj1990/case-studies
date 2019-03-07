import React, { Component } from 'react'
import './index.scss';
import { images } from '../../../utilities/imgimport'

class Category extends Component {
  render() {
    let { category } = this.props;
    let tgtUrl = `/category/${category.id}`;
    let imgUrl = category.image.split('/').pop();

    return (
      <a href={tgtUrl} style={{ maxWidth: '100%' }}>
        <img src={images[imgUrl]} alt={category.imageAlt} className="img-responsive" style={{ maxWidth: '100%' }} />
        <div className="carousel-caption">
          <h2 className="cat-head">{category.name}</h2>
        </div>
      </a>

    )
  }
}
export default Category