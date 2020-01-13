import React from 'react';

import logo from '../../img/logo1.jpg';
import mts from '../../img/mts_icon.png';
import a1 from '../../img/a1_icon.png';
import instagram from '../../img/instagram.png';
import vk from '../../img/vk.png';
import telegram from '../../img/telegram.png';

import './index.scss'

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="header__socials">
                        <a href="https://vk.com/id61792691"><img src={vk} alt="" /></a>
                        <a href="https://www.instagram.com/al.nails_studio/"><img src={instagram} alt=""/></a>
                        <a href="https://t.me/a_lobanova_28"><img src={telegram} alt=""/></a>
                    </div>
                    <div className="header__logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="header__right-part">

                        <div className="header__contacts">
                            <div className="contact">
                                <img src={mts} alt=""/>
                                <div>+375 (33) 308-05-28</div>
                            </div>
                            <div className="contact">
                                <img src={a1} alt=""/>
                                <div>+375 (29) 139-70-21</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}