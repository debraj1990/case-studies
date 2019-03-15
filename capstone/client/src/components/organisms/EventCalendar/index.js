import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Calendar from 'react-calendar'

import { loadEvents } from '../../../actions/event'

import './index.scss';

class EventCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            date: new Date()
        }
    }
    componentDidMount() {
        let { actions } = this.props;
        actions.loadEvents('5c7d35c3574832258003a93f');
    }
    onDateChange = date => this.setState({ date })

    handleForm(e) {
        e.preventDefault()
        let { title, type, time } = this.refs;
        let { date } = this.state;
        let newEvent = {
            title: title.value,
            type: type.value,
            date: date,
            time: time.value
        }
        console.log(newEvent);
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    renderForm() {
        let { isOpen, date } = this.state;
        if (!isOpen) return (<button onClick={e => this.toggleForm()} className="btn btn-info btn-sm"><span className="fa fa-plus"> Event</span></button>)
        else return (
            <div className="card card-default">
                <div className="card-header">Create Event</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group">
                            <input className="form-control" ref="title" placeholder="Event Title" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" ref="type">
                                <option key=''>Type of Event</option>
                                <option key='birthday'>Birthday</option>
                                <option key='wedding'>Wedding</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input readOnly className="form-control" value={date.toDateString()} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" ref="time" />
                        </div>
                        <button className="btn btn-sm btn-primary">Create</button>
                        <button onClick={e => this.toggleForm()} type="button" className="btn btn-sm btn-danger">cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    renderEvents() {
        let { events } = this.state;
        console.log(events)
        if (!events) return;
        return events.map((val, idx) => {
          return (
            <div className="col-sm-3 mb-3 col-6" key={idx}>
              <span>{val.title}</span>
            </div>
          )
        })
    }
    render() {
        let { date } = this.state;
        return (
            <section className="container">
                <div className="col-4 col-sm-4 col-md-4 float-left">
                    <Calendar onChange={this.onDateChange} value={date} minDate={new Date()} />
                </div>
                <div className="row">{this.renderEvents()}</div>
                <div className="col-4 col-sm-4 col-md-4 float-left">
                    {this.renderForm()}
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ loadEvents }, dispatch)
  })
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(EventCalendar);

