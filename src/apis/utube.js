import axios from 'axios';
const KEY = 'AIzaSyDetPegnPmjY8G3sFGfPp8-_7vPFt5M5FQ';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key:KEY
    }

})