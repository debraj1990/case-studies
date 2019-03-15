import React, { Component } from 'react'
import BackButton from '../../atoms/Backbutton';
import Search from '../Search';

class Header extends Component {
  render() {
    let history = this.props;
    return (
      <div>
        <BackButton history={history} />
        <Search/>
        {/* <h1>Header</h1> */}
      </div>
    )
  }
}
export default Header;