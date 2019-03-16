
import React from 'react';


export default ({ event, onDelete }) => {
    return (
        <div className="col-8 col-sm-12 col-md-12">
            <div className="alert alert-info">
                <span className="badge">{event.type}</span> &mdash; <span>{new Date(event.date).toDateString()}</span>
                <i onClick={e => onDelete(event.id)} className="fa fa-times-circle float-right"></i>
                <hr />
                <p><span>{event.title}</span></p>
            </div>
        </div>
    )
};