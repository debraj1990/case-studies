import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home, { metaData as homeInfo } from '../Pages/Home';
import Categorydetail, { metaData as CategorydetailInfo } from '../Pages/Categorydetail';

const Content = () => (
    <div className="wwn-content">
        <div className="wwn-container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path={homeInfo.link} component={Home} />
                <Route path={Categorydetail.link} component={Categorydetail} />

            </Switch>
        </div>
    </div>
);

export default Content;