import React from 'react';
import Card from '../../assets/cards.svg';
import Gas from '../../assets/gas.svg';
import Stats from '../../assets/stats.svg';
import Transfers from '../../assets/transfers.svg';
import './Header.css';

export default function Header() {
    return(
        <header className="header">
            <a><img width="34" height="34" src={Card}/></a>
            <a><img width="30" height="30" src={Gas}/></a>
            <a><img width="30" height="30" src={Stats}/></a>
            <a><img width="30" height="30" src={Transfers}/></a>
        </header>
    )
}