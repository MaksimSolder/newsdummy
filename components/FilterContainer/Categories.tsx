import React from 'react';

export type CategoriesProps = {
    title: string,
    count: number,
}
const Categories = ({title, count}: CategoriesProps) => {
    return (
        <div className="categories">
            <p className="categories-title">{title}</p>
            <p className="categories-title">({count})</p>
        </div>
    );
};

export default Categories;