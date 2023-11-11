import axios from "axios";
import { toast } from "react-hot-toast";

const API_KEY = '39726621-0de1827bbfc07c5637e439509';

export async function getData(query, page) {
    try {
        const options = {
            method: 'GET',
            url: `https://pixabay.com/api/?page=${page}&per_page=12`,
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true
            }
        };
      
        const response = await axios(options);
        const data = response.data;
        return data;
    } catch (error) {
        toast.log('Oops! Looks like something went completely wrong! No worries bro, try later!');
        throw error;
    }
}