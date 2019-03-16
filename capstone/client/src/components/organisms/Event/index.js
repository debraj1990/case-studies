
import React from 'react';


export default ({ event }) => {
    let { deleteEvent } = this.props;
    return (
        <div className="col-8 col-sm-12 col-md-12">
            <div className="alert alert-info">
                <span className="badge">{event.type}</span> &mdash; <span>{event.date}</span>
                <i onClick={e => deleteEvent(event.id)} className="fa fa-times-circle float-right"></i>
                <hr />
                <p><span>{event.title}</span></p>
            </div>
        </div>
    )
};