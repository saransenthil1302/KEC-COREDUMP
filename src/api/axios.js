import axios from 'axios';

export default axios.create({
    baseURL: 'https://kec-core-dump.herokuapp.com'
});
export const api = axios.create({
    baseURL: 'https://kec-core-dump.herokuapp.com'
});
export const getCall = async (options = {
    headers: {
        'Authorization': "Bearer " + localStorage.getItem("jwt")
    },

}, url = "") => {
    const responce = await api.get(url, options);
    console.log(responce);
    return responce.data;
}