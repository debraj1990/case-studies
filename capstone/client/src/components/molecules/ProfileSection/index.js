import React from 'react';
import EditButton from '../../atoms/EditButton';
import LogoutButton from '../../atoms/LogoutButton';
import './ProfileSection.scss';

const metaData = {
    title: 'Profile',
    link: '/profile',
    isFooterLink: true
  };
  

const ProfileSection = ({ title, children }) => (
    <div className="wwn-profile-section">
        <div className="wwn-profile-section-heading clearfix">
            <h2 className="brewing-head float-left">{title}</h2>
            <EditButton className="wwn-edit float-left float-md-right" />
        </div>
        <div className="wwn-profile-section-content">
            {children}
        </div>
        <a className="signout-btn">
            <i className="fa fa-fw fa-power-off"></i> Sign Out
        </a>
        <LogoutButton />
    </div>
);

export default ProfileSection;
export { metaData };