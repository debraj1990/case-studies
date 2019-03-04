import React, { Component } from 'react'
import './index.scss';
class Category extends Component {
  render() {
    let { category } = this.props;
    return (
      <a href={category.link} style={{ maxWidth: '100%' }}>
        <img src={category.image} alt={category.imageAlt} className="img-responsive" style={{ maxWidth: '100%' }} />
        <div className="carousel-caption">
          <h2 className="cat-head">{category.name}</h2>
        </div>
      </a>

    )
  }
}
export default Category