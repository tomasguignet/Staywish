import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const path = "http://localhost:3001";

export const getUsers = createAsyncThunk("user/get", async () => {
  const response = await axios.get(`${path}/user`);
  return response.data;
});

export const getUser = createAsyncThunk("user/getById", async (id) => {
  const response = await axios.get(`${path}/user/${id}`);
  return response.data;
});

export const postUser = createAsyncThunk("user/post", async (data) => {
  const response = await axios.post(`${path}/user`, data);
  return response.data;
});

export const updateUser = createAsyncThunk("user/update", async (data) => {
  const response = await axios.put(`${path}/user`, data);
  return response.data;
});
