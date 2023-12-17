import React from 'react';
import Card, {CardProps} from "@/components/CardContainer/Card/Cards";
import {getAllNews} from "@/app/api/news.api";

const CardContainer = async () => {
    const data = await getAllNews();
    return (
        <div className="card-container">
            {data.articles.map((el:any, index: number) => {
                const date = new Date(el.publishedAt);
                return <Card
                    key={index}
                    title={el.title}
                    description={el.description}
                    author={el.author}
                    date={date}
                    img={el.urlToImage}/>
            })}
        </div>
    );
};

export default CardContainer;