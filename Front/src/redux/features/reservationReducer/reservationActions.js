import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const path = "http://localhost:3001";

export const getReservations = createAsyncThunk("reservation/get", async () => {
  const response = await axios.get(`${path}/reservation`);
  return response.data;
});

export const getReservation = createAsyncThunk(
  "reservation/getById",
  async (id) => {
    const response = await axios.get(`${path}/reservation/${id}`);
    return response.data;
  }
);

export const getUserReservations = createAsyncThunk(
  "reservation/getUserReservations",
  async (userId) => {
    const response = await axios.get(
      `${path}/reservation/userReservations/${userId}`
    );
    return response.data;
  }
);

export const getHomeReservations = createAsyncThunk(
  "reservation/getHomeReservations",
  async (homeId) => {
    const response = await axios.get(
      `${path}/reservation/homeReservations/${homeId}`
    );
    return response.data;
  }
);

export const postReservation = createAsyncThunk(
  "reservation/post",
  async (data) => {
    const response = await axios.post(`${path}/reservation`, data);
    return response.data;
  }
);

export const updateReservation = createAsyncThunk(
  "reservation/update",
  async (data) => {
    const response = await axios.put(`${path}/reservation`, data);
    return response.data;
  }
);
