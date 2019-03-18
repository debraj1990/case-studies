
import React from 'react';


export default ({ event, onDelete }) => {
    return (
        <div className="col-4 col-sm-4 col-md-4 float-left">
            <div className="alert alert-info">
                <span className="badge">{event.type}</span> &mdash; <span>{new Date(event.date).toDateString()}</span>
                <i onClick={e => onDelete(event.id)} className="fa fa-times-circle float-right"></i>
                <hr />
                <p><span>{event.title}</span></p>
            </div>
        </div>
    )
};