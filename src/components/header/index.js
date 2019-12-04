import React from 'react';
import SubHeader from "../sub-header";

import './index.scss'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <SubHeader/>
                    <div className="header-menu">
                        <div className="header-menu__logo">
                            logo
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}