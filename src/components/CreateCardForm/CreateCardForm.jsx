import React, {useState, useCallback} from 'react';
import InputMask from 'react-input-mask';
import './CreateCardForm.scss';
import Card from "../Card/Card";

export default function CreateCardForm({isOpen, onClose}) {
    const [company, setCompany] = useState('Luckoil');
    const [lastDigits, setLastDigits] = useState('');
    const [holderName, setHolderName] = useState('');
    const [isValidForm, setValidForm] = useState(false);

    const handleCardNmbChange = useCallback((e)=> {
        return setLastDigits(e.target.value)
    },[lastDigits, setLastDigits]);

    const handleHolderNameChange = useCallback(e => {
        return setHolderName(e.target.value)
    }, [holderName, setHolderName]);

    const handleCompanyChange = useCallback((e)=> {
        switch (e.target.value) {
            case 'Лукойл': return setCompany('Luckoil');
            case 'Газпром': return setCompany('Gasprom');
            case 'Роснефть': return setCompany('Rosneft');
        }
        return setCompany(e.target.value)
    }, [company, setCompany]);

    function resetForm() {
        setHolderName('');
        setCompany('');
        setLastDigits('');
        setValidForm(false);
    }

    const handleAddCard = useCallback((e)=> {
        e.preventDefault();
        if(company.length > 1 && lastDigits.length >= 16 && holderName.length > 1){
           setValidForm(true);

           resetForm();
        }
    }, [setValidForm, setHolderName, setCompany, setLastDigits]);


        return (
            <>
            <form className={isOpen ? "card-form--open": "card-form--closed" }>
                <div className="close-form" onClick={() => onClose(false)}>&#10005;</div>
                <p>Добавить карту</p>
                    <Card company={company} lastDigits={lastDigits}/>
                <div className="form-item">
                    <label htmlFor="card-number">Номер</label>
                    <InputMask mask="9999 9999 9999 9999" value={lastDigits} onChange={e => handleCardNmbChange(e)}>
                        {(inputProps) => (
                            <input
                                id="card-number" value={inputProps.value} type="text" placeholder="1234 5678 1234 5678"
                            />
                        )}
                    </InputMask>
                </div>
                <div className="form-item">
                    <label htmlFor="card-holder">Имя владельца</label>
                    <input id="card-holder" value={holderName} type="text" onChange={e => handleHolderNameChange(e)}/>
                </div>
                <div className="form-item">
                    <label htmlFor="card-vendor">Компания</label>
                    <select id="card-vendor" onChange={(e) => handleCompanyChange(e)}>
                        <option>
                            Лукойл
                        </option>
                        <option>
                            Газпром
                        </option>
                        <option>
                            Роснефть
                        </option>
                    </select>
                </div>
                <input type="submit" value="Добавить" onClick={e => handleAddCard(e)} className="button-add-card"/>

            </form>
                </>
        )

}