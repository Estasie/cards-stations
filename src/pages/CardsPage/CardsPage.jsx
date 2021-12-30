import React, {useState, useCallback} from 'react';
import CardList from "../../components/CardList/CardList";
import Pagination from '../../components/Pagination/Pagination';
import CreateCardForm from "../../components/CreateCardForm/CreateCardForm";
import './CardsPage.scss';

function CardsPage({cards}) {
    const companies = ['Лукойл', 'Газпром', 'Роснефть'];
    //Для обработки подгрузки данных с сервера
    const [loading, setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(9);

    const [openedCard, setOpenedCard] = useState(null);
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const currentCard = cards.slice(firstCardIndex, lastCardIndex);
    let filteredByValidCards = [];
    const paginate = (pageNumb) => setCurrentPage(pageNumb);

    const [valid, setValid] = useState(true);

    if(valid === false) {
        filteredByValidCards = cards.filter((card) => card.isValid === false)
    } else {
        filteredByValidCards = cards.filter((card) => card.isValid === true)
    }
    const [formOpen, setFormOpen] = useState({form_open: false});
    // const handleFormOpen = (formOpen) => {
    //     return formOpen? setFormOpen(false): setFormOpen(true);
    // };
    const handleOpen = () => {
        setFormOpen({ form_open: true })
    }

    const handleClose = () => {
        setFormOpen({ form_open: false })
    }
    const toggleOpen = (formOpen) => {
        return formOpen.form_open ? setFormOpen({form_open: false}): setFormOpen({form_open: true})
    }
    const handleFilter = (e) => {
        if(e.target.value === 'Заблокированные'){
            setValid(false);
            filteredByValidCards = cards.filter(card => card.isValid === false);
        } else {
            setValid(true);
            filteredByValidCards = cards.filter(card => card.isValid === true);
        }
    }
    return (
        <div className="container">
            <div className="page-wrapper">
                <div className="page-header">
                    <div className="filters">
                        <p className="filters-header">Показать</p>
                        <select id="valid-filter" onClick={e => handleFilter(e)}>
                            <option>Все</option>
                            <option>Заблокированные</option>
                        </select>
                    </div>
                    <button onClick={() => toggleOpen(formOpen)} className={formOpen.form_open ? 'addNewCard-button--hidden' : 'addNewCard-button'} data-title="Добавить новую карту">+</button>
                </div>
                <CardList cards={valid? currentCard: filteredByValidCards} loading={loading}/>
                <Pagination cardsPerPage={cardsPerPage} totalCards={valid? cards.length: filteredByValidCards.length} paginate={paginate}/>
            </div>
            <CreateCardForm isOpen={formOpen.form_open}
                            onClose={handleClose}/>
        </div>
    );
}

export default CardsPage;
