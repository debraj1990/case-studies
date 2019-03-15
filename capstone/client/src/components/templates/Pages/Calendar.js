import React, { Component } from 'react'
import EventCalendar from '../../organisms/EventCalendar';


// import AddToCartBtn from '../../atoms/AddToCartBtn';
// import AddToWishlist from '../../atoms/AddToWishlist';
// import RemoveFromCartBtn from '../../atoms/RemoveFromCartBtn';

const metaData = {
  title: 'Calendar-1',
  link: '/calendar',
  isFooterLink: true
};

class Calendar extends Component {

  render() {
    return (
      <div>
        <EventCalendar />
      </div>
    )
  }
}

export default Calendar;
export { metaData };