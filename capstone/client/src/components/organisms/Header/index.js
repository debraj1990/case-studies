import React, { Component } from 'react'
import BackButton from '../../atoms/Backbutton';
import Search from '../Search';
import LogoutButton from '../../atoms/LogoutButton';
import { images } from '../../../utilities/imgimport';

class Header extends Component {
  render() {
    let history = this.props;
    return (
      <div>
        <BackButton history={history} />
        <a href="/home" className="float-right"><img src={images['logo.png']} alt="Capstone logo" style={{ width: '50px' }} /></a>
        <Search />
        {/* <h1>Header</h1> */}
      </div>
    )
  }
}
export default Header;