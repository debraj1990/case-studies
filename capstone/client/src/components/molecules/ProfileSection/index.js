import React from 'react';
import EditButton from '../../atoms/EditButton';
import './ProfileSection.scss';

const ProfileSection = ({ title, children }) => (
    <div className="wwn-profile-section">
        <div className="wwn-profile-section-heading clearfix">
            <h2 className="brewing-head float-left">{title}</h2>
            <EditButton className="wwn-edit float-left float-md-right" />
        </div>
        <div className="wwn-profile-section-content">
            {children}
        </div>
    </div>
);

export default ProfileSection;