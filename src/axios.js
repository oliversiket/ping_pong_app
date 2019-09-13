import axios from "axios";

export default axios.create({

    baseURL: "http://oliver.restful.training/api/ping-pong",

    params: {
        key: "e7bd66d40b0277c59915133e837ae658241d8c22",
    },

    headers: {
        Accept: "application/json",
}, });