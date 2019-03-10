import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home, { metaData as homeInfo } from '../Pages/Home';
import Categorydetail, { metaData as catInfo } from '../Pages/Categorydetail';
import Productdetail, { metaData as prodInfo } from '../Pages/Productdetail';

const Content = () => (
    <div className="wwn-content">
        <div className="wwn-container">
            {Productdetail.link}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path={homeInfo.link} component={Home} />
                <Route exact path={catInfo.link} component={Categorydetail} />
                <Route exact path={prodInfo.link} component={Productdetail} />

            </Switch>
        </div>
    </div>
);

export default Content;