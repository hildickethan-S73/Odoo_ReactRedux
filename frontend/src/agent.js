import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:8069/api';
const responseBody = res => res.body;

const requests = {
    get: (url) =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, {params: {body}}).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, {params: {body}}).then(responseBody),
    delete: (url) =>
        superagent.del(`${API_ROOT}${url}`).then(responseBody)
};

const Restaurants = {
    getAll: () =>
        requests.get('/restaurants'),
    getOne: (restaurant) =>
        requests.get(`/restaurants/${restaurant}`),
    create: (name, description) => 
        requests.post('/restaurants',{name,description}),
    update: (restaurant, newName, newDescription) =>
        requests.put(`/restaurants/${restaurant}`,{newName,newDescription}),
    delete: (restaurant) => 
        requests.delete(`/restaurants/${restaurant}`)
};

export default {
    Restaurants
}