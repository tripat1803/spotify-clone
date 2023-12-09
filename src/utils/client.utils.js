import axios from "axios";

export const publicApi = axios.create({
    baseURL: "http://192.168.29.14:4000",
    withCredentials: true
});