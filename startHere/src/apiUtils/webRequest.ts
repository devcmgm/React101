import axios, { AxiosResponse } from "axios";
import cookie from "react-cookies";


const defaultHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "X-XSRF-TOKEN": cookie.load("XSRF-TOKEN")
};

const _getHeaders = () => {
    let headers = defaultHeaders;
    if (localStorage.getItem("auth")) {
        // @ts-ignore
        headers.Authorization = `Bearer ${localStorage.getItem("auth")}`;
    }
    return headers;
};

const _postHeaders = () => {
    let headers = _getHeaders();
       //  headers["X-XSRF-TOKEN"] = csrf;
    return headers;
};

const performGet = (endpoint: string): Promise<AxiosResponse> => {
    const instance = axios.create({ headers: _getHeaders() });
    return instance.get(`/${endpoint}`).catch(err => err.request);
};

const performPost = (endpoint: string, data: any): Promise<AxiosResponse> => {
    const instance = axios.create({ headers: _postHeaders() });
    return instance
        .post(`/${endpoint}`, JSON.stringify(data))
        .catch(err => err.request);
};

export const getData = (): Promise<AxiosResponse> => {
    return   performGet("getData");
}

export const postData = (data: string): Promise<AxiosResponse> => {
    return   performPost("postData", data);
}
