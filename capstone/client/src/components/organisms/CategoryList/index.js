import React, { Component } from 'react'
import Category from '../../atoms/Category';
import './index.scss'

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          'name': 'Anniversary',
          'link': '/home',
          'image': '/images/anniversary.jpg',
          'imageAlt': 'anniversary'
        },
        {
          'name': 'Valentine',
          'link': '/home',
          'image': '/images/valentine.jpg',
          'imageAlt': 'valentine'
        },
        {
          'name': 'Birthday',
          'link': '/home',
          'image': '/images/birthday.jpg',
          'imageAlt': 'birthday'
        },
        {
          'name': 'Wedding',
          'link': '/home',
          'image': '/images/wedding.jpg',
          'imageAlt': 'wedding'
        },
        {
          'name': 'Christmas',
          'link': '/home',
          'image': '/images/christmas.jpg',
          'imageAlt': 'christmas'
        }
      ]
    }
  }
  renderCategories() {
    let { categories } = this.state;

    return categories.map((val, idx) => {
      return (
        <div className="col-sm-3 mb-3 col-6" key={idx}>
          <Category category={val} />
        </div>
      )
    })
  }

  render() {
    return (
      <section className="category-list">
        <h1 className="mt-3 mb-3">All Categories</h1>
        <div className="row">{this.renderCategories()}
        </div>
      </section>
    )
  }
}

export default CategoryList;
