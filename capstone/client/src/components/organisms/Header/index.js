import React, { Component } from 'react'
import BackButton from '../../atoms/Backbutton';

class Header extends Component {
  render() {
    let history = this.props;
    return (
      <div>
        <BackButton history={history} />
        {/* <h1>Header</h1> */}
      </div>
    )
  }
}
export default Header;