import React from 'react';

import {Instagram, Phone} from "@material-ui/icons";
import { MenuItem } from "@material-ui/core";
import logo from '../../img/logo1.jpg'

import './index.scss'

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="header__left-part">
                        <div className="header__contacts">
                            <span><Phone color="black"/>+375 (33) 308-05-28</span>
                        </div>
                        <div className="header__socials">
                            <Instagram color="black"/>
                        </div>
                    </div>
                    <div className="header__logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="header__menu">
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >Profile</MenuItem>
                    </div>
                </div>
            </div>
        )
    }
}