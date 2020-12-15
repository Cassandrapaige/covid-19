import axios from 'axios'
import {API_KEY} from '../base'

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://content.guardianapis.com/',
    headers: {
        'user-key': API_KEY,
        'Content-Type':  'application/json',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Origin': 'origin',
    }
});