import axios, { AxiosResponse } from "axios";
import cookie from "react-cookies";


const defaultHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "X-XSRF-TOKEN": cookie.load("XSRF-TOKEN")
};

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: {defaultHeaders}
});

const _getHeaders = () => {
    let headers = defaultHeaders;
    if (localStorage.getItem("token")) {
        // @ts-ignore
        headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return headers;
};

const _postHeaders = () => {
    let headers = _getHeaders();
       //  headers["X-XSRF-TOKEN"] = csrf;
    return headers;
};

const performPut = (endpoint: string, data: any): Promise<AxiosResponse> => {
    return instance
        .post(`/${endpoint}`, JSON.stringify(data))
        .catch(err => err.request);
};

const performDelete = (endpoint: string, data: any): Promise<AxiosResponse> => {
    return instance
        .post(`/${endpoint}`, JSON.stringify(data))
        .catch(err => err.request);
};
const demoURL = "";

const performGet = (endpoint: string): Promise<AxiosResponse> => {
    console.log("URL: " + endpoint);
    return instance.get(`/${endpoint}`).catch(err => err.request);
};

const performPost = (endpoint: string, data: any): Promise<AxiosResponse> => {
    return instance
        .post(`/${endpoint}`, JSON.stringify(data))
        .catch(err => err.request);
};

export const getData = (url: string): Promise<AxiosResponse> => {
    return   performGet( "/getData");
}

export const postData = (url: string, data: string): Promise<AxiosResponse> => {
    return   performPost("/postData", data);
}


export const putData = (url: string, data: string): Promise<AxiosResponse> => {
    return   performPut( "/putData", data);
}

export const doDelete = (url: string, data: string): Promise<AxiosResponse> => {
    return   performDelete( "/deleteData", data);
}
