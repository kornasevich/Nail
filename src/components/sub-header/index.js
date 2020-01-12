import React, { Component } from 'react';
import { Instagram } from '@material-ui/icons';

import './index.scss'

export default class SubHeader extends Component{
  render() {
    return(
      <div className="container">
        <div className="sub-header">
          <div className="sub-header__socials">
            <Instagram color="black"/>
          </div>

        </div>
      </div>
    )
  }
}