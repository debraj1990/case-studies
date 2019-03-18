import React, { Component } from 'react'
import EventCalendar from '../../organisms/EventCalendar';
import Header from '../../organisms/Header';

const metaData = {
  title: 'Calendar-1',
  link: '/calendar',
  isFooterLink: true
};

class Calendar extends Component {

  render() {
    return (
      <div>
        <Header heading="Events" />
        <EventCalendar />
      </div>
    )
  }
}

export default Calendar;
export { metaData };