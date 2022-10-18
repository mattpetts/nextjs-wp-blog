import axios from 'axios';
import { POSTS_API_URL, AUTHORS_API_URL, MEDIA_API_URL } from './constants';

export const getAllPostsFromServer = async () => {
    //get all posts from Server
    try {
        const { data } = await axios.get(POSTS_API_URL);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getAuthor = async (id) => {
    try {
        const {
        data: { name },
        } = await axios.get(`${AUTHORS_API_URL}/${id}`);
        return name;
    } catch (error) {
        console.log(error);
    }
};

export const getFeaturedImage = async (id) => {
    try {
        const res = await axios.get(`${MEDIA_API_URL}/${id}`);
        return res.data.guid.rendered;
    } catch (error) {
        console.log(error);
        return '';
    }
};

export function getRandom () {
    // get a random number for the class name between 1 and 3
    const totalColors = 5;
    const rand = Math.ceil(Math.random() * totalColors);
    return rand;
}

export function logThis (str) {
    // get a random number for the class name between 1 and 3
    console.log(str)
}

export function formatdate (date) {
    let formatDate = new Date(date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false
    });
    return formatDate;
}