import {apiKey,link } from "./apilink.json";
export const getAllNews = async () => {
    return await fetch(`${link}?country=us&category=business&apiKey=${apiKey}`).then(response => {
        return response.json();
    })
}

export const getCategories = () => {
    return [
        {
          title: "Buisness",
          count: 16
        },
        {
            title: "Science",
            count: 11
        },
        {
            title: "Sports",
            count: 10
        },
        {
            title: "World",
            count: 30
        },
    ]
}

export const getTags = () => {
    return [
        {
            title: "Modern",
        },
        {
            title: "SEO",
        },
        {
            title: "UX",
        },
        {
            title: "Politics",
        },
        {
            title: "New York",
        },
        {
            title: "Police",
        },
        {
            title: "Garbage",
        },
    ];
}

