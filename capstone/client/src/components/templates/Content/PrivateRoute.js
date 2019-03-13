import React, { Component } from 'react';
import firebase from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() { console.log('cat');
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {console.log(user); console.log('bat');
                this.setState({isAuthenticated: !!user});
                if(!user){ console.log(this.props.history)
                    this.props.history.push(`/login`); //user logged out
                }
            }
        ); console.log('mat');
    }
    
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    }

    render() {
        const { component: Component, ...rest } = this.props;
        console.log(this.state);
        if(this.state.isAuthenticated){
            return (
                <Route {...rest} render={(props) => (
                    <Component {...props} />
                  )} />
            );
        }
        return (<div></div>)
        // return (
        //     <Route {...rest} render={(props) => (
        //         true//this.state.isAuthenticated === true
        //           ? <Component {...props} />
        //           : <Redirect to='/login' />
        //       )} />
        // );
    }
}
//withRouter HOC used to include history as this was a custom Route & was not having history originally
export default withRouter(PrivateRoute);