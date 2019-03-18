import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../atoms/Backbutton';
import Search from '../Search';
// import LogoutButton from '../../atoms/LogoutButton';
import { images } from '../../../utilities/imgimport';
import { withRouter } from 'react-router-dom';
import './index.scss';

class Header extends Component {
  render() {
    let { history, heading, location } = this.props;
    let pathname = location.pathname;
    return (
      <div className="header">
        <div className="row">
          <div className="col"><BackButton history={history} /></div>
          <div className="main-heading">{heading}</div>
          <div className="col logo"><Link to="/home" className="float-right"><img src={images['logo.png']} alt="Capstone logo" /></Link></div>
        </div>
        {
          (pathname === '/home' || pathname === '/search') &&
          <div className="row">
            <Search />
          </div>
        }
      </div>
    )
  }
}
export default withRouter(Header);