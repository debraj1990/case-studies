import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login, { metaData as loginInfo } from '../Pages/Login';
import ProfileSection, { metaData as profileInfo } from '../../molecules/ProfileSection';
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
                <Route exact path="/" component={Login} />
                <Route exact path={loginInfo.link}  component={Login} />
                <PrivateRoute exact path={homeInfo.link} component={Home} />
                <PrivateRoute exact path={cartInfo.link} component={Cart} />
                <PrivateRoute exact path={wishlistInfo.link} component={Wishlist} />
                <PrivateRoute exact path={catInfo.link} component={Categorydetail} />
                <PrivateRoute exact path={prodInfo.link} component={Productdetail} />
                <PrivateRoute exact path={profileInfo.link} component={ProfileSection} />

            </Switch>
        </div>
    </div>
);

export default Content;