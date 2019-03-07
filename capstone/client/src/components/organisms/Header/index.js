import React, { Component } from 'react'
import BackButton from '../../atoms/Backbutton';

class Header extends Component {
  render() {
    return (
      <div>
        <BackButton tgtUrl="/home" />
        {/* <h1>Header</h1> */}
      </div>
    )
  }
}
export default Header;