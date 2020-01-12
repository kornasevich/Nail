import React from 'react';

import {Instagram, Phone} from "@material-ui/icons";
import logo from '../../img/logo1.jpg'

import './index.scss'

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div style={{height: 'fit-content', margin: 'auto 0'}}>
                        <span style={{fontSize: '30px'}}>A.L. Nails Studio</span>
                    </div>
                    <div className="header__right-part">
                        <div className="header__socials">
                            <Instagram color="black"/>
                        </div>
                        <div className="header__contacts">
                            <span>
                                <Phone color="black" style={{verticalAlign: "middle"}}/>
                                +375 (33) 308-05-28
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}