import React, { Component } from 'react'

export default class BackButton extends Component {
  render() {
    let { tgtUrl } = this.props;
    tgtUrl = tgtUrl ? tgtUrl : '#';
    return (
      <a href={tgtUrl} className="previous round">&#8249;</a>
    )
  }
}
