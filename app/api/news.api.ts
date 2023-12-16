import {apiKey,link } from "./apilink.json";
export const getAllNews = async () => {
    return await fetch(`${link}?country=us&category=business&apiKey=${apiKey}`).then(response => {
        return response.json();
    })
}