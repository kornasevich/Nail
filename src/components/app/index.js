import React from 'react';
import Header from '../header'
import SubHeader from "../sub-header";
import Price from '../price';
import './index.css'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SubHeader/>
                <Price/>
            </div>
        )
    }
}