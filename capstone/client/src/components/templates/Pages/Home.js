import React, { Component } from 'react';
import firebase from 'firebase';
import CategoryList from '../../organisms/CategoryList';


const metaData = {
  title: 'Home',
  link: '/home',
  isFooterLink: true
};

class Home extends Component {

  // Listen to the Firebase Auth state and set the local state.
  // componentDidMount() {
  //   //we need to try implementing this logic somewhere in routing to be applied on all pages except login as reverse needs to be applied there
  //   this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
  //       (user) => {console.log(user);
  //                 if(!user){
  //                     this.props.history.push(`/login`); //user logged out
  //               } else {
  //                 // Logic to check for record in mongoDB and save a new record if not found
  //                 // this.currentUserEmail = JSON.parse(sessionStorage.getItem('userAuthInfo')).user.email;
  //               }
  //             }
  //   );
  // }
  
  // // Make sure we un-register Firebase observers when the component unmounts.
  // componentWillUnmount() {
  //   this.unregisterAuthObserver();
  // }
  render() {
    return (
      <div>
        <CategoryList />
      </div>
    )
  }
}
export default Home;
export { metaData };