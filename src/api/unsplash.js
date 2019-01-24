import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID c42c3fb9880fd457f7d7cffa65fe16920f7c44c52e15a480b932cca11541a627'
    }
})