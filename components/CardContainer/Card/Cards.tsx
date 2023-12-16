import React from 'react';
import "../cards.scss";
export type CardProps = {
    title: string,
    description: string,
    author: string,
    date: Date,
    img: string,
}
const Card = ({title, description, author, date, img}: CardProps) => {
    return (
        <div className="card">
            <div className="card-img" style={{backgroundImage: `url(${img})`}}></div>
            <div className="card-category">Science</div>
            <div className="card-title">{title}</div>
            <div className="card__footer">
                <div className="card__footer-date">{date.toLocaleDateString()}</div>
                <div className="card__footer-author">{author}</div>
            </div>
        </div>
    );
};

export default Card;