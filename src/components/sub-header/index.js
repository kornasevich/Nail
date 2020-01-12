import React, { Component } from 'react';

import profileImg from '../../img/profileImg.jpg'

import './index.scss'

export default class SubHeader extends Component{
  render() {
    return(
      <div className="container">
        <div className="sub-header">
            <img class="sub-header__image" src={profileImg} alt=""/>
            <span class="sub-header__description">Lorem ipsum dolor sit amet, consectetur a
                dipisicing elit. A accusantium amet asperiores as
                sumenda consectetur debitis, dolore fuga hic id, in i
                psa minima molestias nesciunt placeat provident quibusdam reprehenderit
                similique suscipit?</span>
        </div>
      </div>
    )
  }
}