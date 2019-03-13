import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home, { metaData as homeInfo } from '../Pages/Home';
import Categorydetail, { metaData as catInfo } from '../Pages/Categorydetail';
import Productdetail, { metaData as prodInfo } from '../Pages/Productdetail';
import Cart, { metaData as cartInfo } from '../Pages/Cart';
import Wishlist, { metaData as wishlistInfo } from '../Pages/Wishlist';
import OnBeforeLoad from '../../hoc/OnBeforeLoad';


const Content = () => (
    <div className="wwn-content">
        <div className="wwn-container">
            {Productdetail.link}
            <Switch>
                <Route exact path="/" component={() => <OnBeforeLoad><Home /></OnBeforeLoad>} />
                <Route exact path={homeInfo.link} component={() => <OnBeforeLoad><Home /></OnBeforeLoad>} />
                <Route exact path={cartInfo.link} component={() => <OnBeforeLoad><Cart /></OnBeforeLoad>} />
                <Route exact path={wishlistInfo.link} component={() => <OnBeforeLoad><Wishlist /></OnBeforeLoad>} />
                <Route exact path={catInfo.link} render={(props) => <OnBeforeLoad {...props} ><Categorydetail {...props} /></OnBeforeLoad>} />
                <Route exact path={prodInfo.link} render={(props) => <OnBeforeLoad {...props} ><Productdetail {...props} /></OnBeforeLoad>} />

            </Switch>
        </div>
    </div>
);

export default Content;