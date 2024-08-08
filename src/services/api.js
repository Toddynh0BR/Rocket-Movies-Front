import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-back-ast4.onrender.com"
})