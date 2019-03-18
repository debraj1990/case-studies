import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
// import { FIREBASE_CONFIG } from '../../../constants';
import EditButton from '../../atoms/EditButton';
import LogoutButton from '../../atoms/LogoutButton';
import './ProfileSection.scss';

// Configure Firebase.
// firebase.initializeApp(FIREBASE_CONFIG);

const metaData = {
    title: 'Profile',
    link: '/profile',
    isFooterLink: true
};


// const ProfileSection = ({ title }) => (
class ProfileSection extends Component {
    constructor(props) {
        super(props);
        this.onLoggedout = this.onLoggedout.bind(this);
    }

    onLoggedout(e) {
        firebase.auth().signOut();
        sessionStorage.clear();
        this.props.history.push(`/login`);
    }
    render() {
        const { title, user } = this.props;
        return (
            <div className="wwn-profile-section">
                <div className="wwn-profile-section-heading clearfix">
                    <h2 className="brewing-head float-left">{title}</h2>
                    <EditButton className="wwn-edit float-left float-md-right" />
                </div>
                <div className="wwn-profile-section-content">
                    <h3>{user.fullName}</h3>
                </div>
                <Link to="/" className="signout-btn" onClick={e => this.onLoggedout()}>
                    <i className="fa fa-fw fa-power-off"></i> Sign Out
            </Link>
                <LogoutButton />
            </div>
        );
    }
}


export { metaData };

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    user: state.user
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    null
)

export default connectToStore(ProfileSection);