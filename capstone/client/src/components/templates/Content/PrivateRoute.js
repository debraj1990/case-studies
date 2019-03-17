import React, { Component } from 'react';
import firebase from 'firebase';
import {
    // BrowserRouter as Router,
    Route,
    // Link,
    // Redirect,
    withRouter
} from 'react-router-dom';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../../actions/user';


class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: {}
        }
    }
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                console.log(user);
                if (user) {
                    let { actions } = this.props;
                    let userDataObj = {
                        "fullName": user.displayName,
                        "email": user.email
                    };
                    console.log('dispatching action');
                    actions.getUser(user.email, userDataObj);
                    this.setState(
                        {
                            isAuthenticated: !!user,
                            user: userDataObj
                        }
                    );
                }
                else {
                    // console.log(this.props.history)
                    this.props.history.push(`/login`); //user logged out
                }
            }
        );
    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {

        const { component: Component, user, ...rest } = this.props;
        console.log('===', this.props);
        if (this.state.isAuthenticated && user.id) {
            return (
                <Route {...rest} render={(props) => (
                    <Component {...props} />
                )} />
            );
        }
        return (<div></div>)
    }
}

const mapStateToProps = (state) => ({
    // ... computed data from state and optionally ownProps
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ getUser }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

//withRouter HOC used to include history as this was a custom Route & was not having history originally
export default connectToStore(withRouter(PrivateRoute));