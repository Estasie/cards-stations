import React, {FC} from 'react';
import Card from '../Card/Card';
import "./CardList.scss";

export default function CardList({cards, loading}) {
    if(loading){
        return <p>Загрузка...</p>
    }
    return(
        <div className="card-list--wrapper">
            <div className="card-list--container">
                {cards.map(card => {
                    return (
                        <Card key={card.id} regDate={card.regDate} lastDigits={card.lastDigits} lastTransaction={card.lastTransaction} company={card.company} balance={card.balance} isValid={card.isValid}/>
                    )
                })}
            </div>
        </div>
    )
}
