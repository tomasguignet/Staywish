import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const getHomes = createAsyncThunk(
    "home/get",
    async () => {
        const response = await axios.get(
            ``
        );
        return response.data;
    }
);

export const getHome = createAsyncThunk(
    "home/getById",
    async (id) => {
        const response = await axios.get(
            ``
        );
        return response.data;
    }
);

export const postHome = createAsyncThunk(
    "home/post",
    async (data) => {
        const response = await axios.post(
            ``,
            data
        );
        return response.data;
    }
);

export const updateHome = createAsyncThunk(
    "home/update",
    async (data) => {
        const response = await axios.put(
            ``,
            data
        );
        return response.data;
    }
);