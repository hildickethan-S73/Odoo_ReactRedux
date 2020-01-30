import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:8069/api';
const responseBody = res => res.body.result
const httpResponseBody = res => JSON.parse(res.text)

const jsonHeader = (req) => req.set('Content-Type', 'application/json');

const requests = {
    get: (url) =>
        superagent.get(`${API_ROOT}${url}`).then(httpResponseBody),
    post: (url, params) =>
        superagent.post(`${API_ROOT}${url}`, {params}).use(jsonHeader).then(responseBody),
    put: (url, params) =>
        superagent.put(`${API_ROOT}${url}`, {params}).use(jsonHeader).then(responseBody),
    delete: (url) =>
        superagent.del(`${API_ROOT}${url}`).use(jsonHeader).then(responseBody)
};

const Restaurants = {
    getAll: () =>
        requests.get('/restaurant'),
    getOne: (restaurant) =>
        requests.get(`/restaurant/${restaurant}`),
    create: (name, description) => 
        requests.post('/restaurant',{name,description}),
    update: (restaurant, newName, newDescription) =>
        requests.put(`/restaurant/${restaurant}`,{newName,newDescription}),
    delete: (restaurant) => 
        requests.delete(`/restaurant/${restaurant}`)
};

export default {
    Restaurants
}