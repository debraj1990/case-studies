import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home, { metaData as homeInfo } from '../Pages/Home';
import Anniversary, { metaData as anniversaryInfo } from '../Pages/Anniversary';

const Content = () => (
    <div className="wwn-content">
        <div className="wwn-container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path={homeInfo.link} component={Home} />
                <Route path={anniversaryInfo.link} component={Anniversary} />

            </Switch>
        </div>
    </div>
);

export default Content;