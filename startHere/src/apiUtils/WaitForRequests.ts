import {doDelete, getData, putData, postData} from "./webRequest";

export const waitForGetData = async () => {
    try {
        await getData().then(data => {
            const result = JSON.stringify(data.data);
            console.log(result);
            return result;
        });
    } catch (err) {
        console.log('fetch failed', err);
        return "{error: 'err'}";
    }
}

export const waitForPostData = async (bodyData: string) => {
    try {
        await postData(bodyData).then((data: any) => {
            const result = JSON.stringify(data);
            console.log(result);
            return result;
        });
    } catch (err) {
        console.log('request failed', err);
        return "{error: 'err'}";
    }
}


export async function waitForPutData(bodyData: string) {
    try {
        await putData(bodyData).then(data => {
            const result = JSON.stringify(data.data);
            console.log(result);
            return result;
        });
    } catch (err) {
        console.log('fetch failed', err);
        return "{error: 'err'}";
    }
}

export async function waitForDeleteData(deleteData: string) {
    try {
        await doDelete(deleteData).then(data => {
            const result = JSON.stringify(data.data);
            console.log(result);
            return result;
        });
    } catch (err) {
        console.log('fetch failed', err);
        return "{error: 'err'}";
    }
}
