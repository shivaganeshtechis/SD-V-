import axios from 'axios';


var baseURL;
    baseURL = 'https://backend-sdp-m.herokuapp.com/';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */

 export default class API {
    getMovies = async params => {
        let url = '/movies/';
        let query = new URLSearchParams();
        for (const key in params) {
            if (params[key] != null) {
                query.append(key, params[key]);
            }
        }

        if (query.toString() != '') {
            url += '?' + query.toString();
        }
        const places = await api
            .get(url)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return places;
    };
}
