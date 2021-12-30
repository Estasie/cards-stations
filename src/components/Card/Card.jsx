import React, {useCallback, useState} from 'react';
import {selectCardCompany} from "../../helpers/selectCardCompany";
import "./card.scss";

export default function Card({regDate, lastTransaction= null, company = null,lastDigits, balance = null, isValid= true}) {
    const date = new Date(regDate * 1000);
    const [isShowed, setShowed] = useState(false);
    return(
        <div className={isValid? `card card-${company}`: "card card-banned"}>
            <div className="card-description">
                <div className="card-bonuses">
                    <p className="card-bonuses--title">Бонусы</p>
                    <p className="card-bonuses--value">{balance? Math.round(balance).toFixed(2): "0"} &#8381;</p>
                </div>
                {lastTransaction === null?<p className="card-number">{lastDigits}</p> : <p className="card-number">{`**** **** **** ${lastDigits}`}</p>}

            </div>
            <img src={selectCardCompany(company)} className={company? `card-logo`: `card-logo--hidden`}/>

        </div>
    )
}