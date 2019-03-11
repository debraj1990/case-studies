import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home, { metaData as homeInfo } from '../Pages/Home';
import Categorydetail from '../Pages/Categorydetail';
import Cart, { metaData as cartInfo } from '../Pages/Cart';
import Wishlist, { metaData as wishlistInfo } from '../Pages/Wishlist';
import OnBeforeLoad from '../../hoc/OnBeforeLoad';


const Content = () => (
    <div className="wwn-content">
        <div className="wwn-container">
            <Switch>
                <Route exact path="/" component={() => <OnBeforeLoad><Home /></OnBeforeLoad>} />
                <Route path={homeInfo.link} component={() => <OnBeforeLoad><Home /></OnBeforeLoad>} />
                <Route exact path={cartInfo.link} component={() => <OnBeforeLoad><Cart /></OnBeforeLoad>} />
                <Route exact path={wishlistInfo.link} component={() => <OnBeforeLoad><Wishlist /></OnBeforeLoad>} />
                <Route path={Categorydetail.link} component={Categorydetail} />

            </Switch>
        </div>
    </div>
);

export default Content;