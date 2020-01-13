import React, {Component} from 'react';

import './index.scss'

export default class Price extends Component {
    render() {
        return (
            <div className="container">
                <h1>Прайс</h1>
                <table>
                    <tr>
                        <th>Наименование</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>Комбинированный маникю + однотонное покрытие</td>
                        <td>20 руб.</td>
                    </tr>
                    <tr>
                        <td>Комбинированный маникю + дизайн(френч, лунки)</td>
                        <td>25 руб.</td>
                    </tr>
                    <tr>
                        <td>Дизайн(стразы, наклейки, фольга)</td>
                        <td>2 руб.</td>
                    </tr>
                    <tr>
                        <td>Укрепление ногтей(гель, акриловая пудра)</td>
                        <td>5 руб.</td>
                    </tr>
                    <tr>
                        <td>Наращивание, ремонт сломанного ногтя</td>
                        <td>2 руб.</td>
                    </tr>
                    <tr>
                        <td>Снятие не моего покрытия(с учётом последующего покрытия)</td>
                        <td>2 руб.</td>
                    </tr>
                </table>
            </div>
        )
    }
}