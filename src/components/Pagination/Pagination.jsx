import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Pagination.scss';

export default function Pagination({cardsPerPage, totalCards, paginate}) {

    const pageNumbs = [];
    const [currentPage, setCurrentPage] = useState(1);
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbs.push(i);
    }

    return (
        <ul className="pagination">
            {pageNumbs.map(pageNum => {
                return <li className="pagination-numb" key={pageNum}>
                    <Link to={`#${pageNum}`} className={pageNum === currentPage ? "pagination-link--active" : "pagination-link"} onClick={() => {
                        paginate(pageNum)
                        setCurrentPage(pageNum)
                    }}>{pageNum}</Link>
                </li>
            })}
        </ul>
    )
}