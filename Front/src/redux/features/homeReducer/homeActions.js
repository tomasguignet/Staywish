import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const path = "http://localhost:3001";

export const getHomes = createAsyncThunk("home/get", async () => {
  const response = await axios.get(`${path}/home`);
  return response.data;
});

export const getHome = createAsyncThunk("home/getById", async (id) => {
  const response = await axios.get(`${path}/home/${id}`);
  return response.data;
});

export const postHome = createAsyncThunk("home/post", async (data) => {
  const response = await axios.post(`${path}/home`, data);
  return response.data;
});

export const updateHome = createAsyncThunk("home/update", async (data) => {
  const response = await axios.put(`${path}/home`, data);
  return response.data;
});
