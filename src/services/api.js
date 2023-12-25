import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a192ca0e9d8f4a140df73bfb9e7be991';

export const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data
}

export const getMovieById = async (id) => {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data
}

export const getCast = async (id) => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data
}

export const getReviews = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data
}

export const getMovieByName = async (name) => {
    const response = await axios.get(`/search/movie?query=${name}&api_key=${API_KEY}`);
    return response.data
}