// @flow

import axios from 'axios';

type Method = "get" | "post" | "put" | "delete";

let server = "";
if (process.env.NODE_ENV !== "production") {
    server = "http://localhost:8080";
}


export const HttpService = {
    /**
     * Send request.
     * @param method
     * @param url
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    send: (method: Method, url: string, data): Promise => {
        url = server + url;
        const config = {
            method, url,
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        };
        if (data) {
            config.data = data;
        }
        return axios(config)
            .then((response) => {
                console.log(`Send request to url = ${url}`);
                return response;
            })
            .catch((reason) => {
                console.error(`Failed to load data from url = ${url}, response:`, reason);
                return reason;
            });
    }
};

