import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const path = "http://localhost:3001";

export const getComments = createAsyncThunk("comment/get", async () => {
  const response = await axios.get(`${path}/comment`);
  return response.data;
});

export const getComment = createAsyncThunk("comment/getById", async (id) => {
  const response = await axios.get(`${path}/comment/${id}`);
  return response.data;
});

export const getUserComments = createAsyncThunk(
  "comment/getUserComments",
  async (userId) => {
    const response = await axios.get(`${path}/comment/userComments/${userId}`);
    return response.data;
  }
);

export const getHomeComments = createAsyncThunk(
  "comment/getHomeComments",
  async (homeId) => {
    const response = await axios.get(`${path}/comment/homeComments/${homeId}`);
    return response.data;
  }
);

export const postComment = createAsyncThunk("comment/post", async (data) => {
  const response = await axios.post(`${path}/comment`, data);
  return response.data;
});

export const updateComment = createAsyncThunk(
  "comment/update",
  async (data) => {
    const response = await axios.put(`${path}/comment`, data);
    return response.data;
  }
);
