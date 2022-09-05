import axios from "axios";
import { store } from '../Redux/store';

const Live_URL = process.env.REACT_APP_BASEURL;

export const authAxios = () => {
    let token = store.getState('state').auth.token;

    return axios.create({
        baseURL: Live_URL,
        headers: {
            Authorization: `${token ? `${token}` : null}`,
        },
    });
};

export const withoutAuthAxios = () => {
    return axios.create({
        baseURL: Live_URL,
    });
};