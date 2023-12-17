import React from 'react';
export type TagsProps = {
    title: string
}

const Tags = ({title}: TagsProps) => {
    return (
             <span className="tags-container-badge">{title}</span>
    );
};

export default Tags;