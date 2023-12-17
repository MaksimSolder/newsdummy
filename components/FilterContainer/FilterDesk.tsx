import React from 'react';
import "./filter.scss";
import {getCategories, getTags} from "@/app/api/news.api";
import Categories, {CategoriesProps} from "@/components/FilterContainer/Categories";
import Tags, {TagsProps} from "@/components/FilterContainer/Tags";
const FilterDesk = () => {
    const categories:CategoriesProps[] = getCategories();
    const tags:TagsProps[] = getTags();

    return (
        <div className="filterdesk">
            <div className="filterdesk-header">Categories</div>
            {categories.map((el:CategoriesProps, index: number) => {
                return <Categories
                    title={el.title}
                    count={el.count}
                    key={index}/>
            })}
            <div className="filterdesk-header mt-4">Tags</div>
            <div className="tags-container">
                {tags.map((el:TagsProps, index:number) => {
                    return <Tags
                        key={index}
                        title={el.title}
                    />
                })}
            </div>
        </div>
    );
};

export default FilterDesk;