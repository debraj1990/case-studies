import React, { Component } from 'react'

export default class BackButton extends Component {
  handleClick() {
    let { history } = this.props;
    if (history) {
      history.goBack();
    }
  }
  render() {


    return (
      <button className="fa previous round" onClick={(e) => this.handleClick(e)}>
        <i className="fa icon-back">&#xf104;</i></button>
    )
  }
}
