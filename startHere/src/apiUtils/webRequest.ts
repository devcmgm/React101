import axios, { AxiosResponse } from "axios";
import cookie from "react-cookies";

const defaultHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "X-XSRF-TOKEN": cookie.load("XSRF-TOKEN")
};

const demoURL = 'http://localhost:3001';

const instance = axios.create({
    timeout: 1000,
    headers: {defaultHeaders}
});

const performPut = (endpoint: string, data: any): Promise<AxiosResponse> => {
    return instance
        .post(demoURL + `/${endpoint}`, JSON.stringify(data))
        .catch(err => err.request);
};

const performDelete = (endpoint: string, data: any): Promise<AxiosResponse> => {
    return instance
        .post(demoURL + `/${endpoint}`, JSON.stringify(data))
        .catch(err => err.request);
};

const performGet = (endpoint: string): Promise<AxiosResponse> => {
    console.log("URL: " + endpoint);
    return instance.get(demoURL + `/${endpoint}`).catch(err => err.request);
};

const performPost = (endpoint: string, data: any): Promise<AxiosResponse> => {
    return instance
        .post(demoURL + `/${endpoint}`, JSON.stringify(data))
        .catch(err => err.request);
};

export const getData = (): Promise<AxiosResponse> => {
    return   performGet( "/getData");
}

export const postData = (data: string): Promise<AxiosResponse> => {
    return   performPost("/postData", data);
}

export const putData = ( data: string): Promise<AxiosResponse> => {
    return   performPut( "/putData", data);
}

export const doDelete = (data: string): Promise<AxiosResponse> => {
    return   performDelete( "/deleteData", data);
}
