import { createSlice } from "@reduxjs/toolkit";
import {
  getReservations,
  getReservation,
  getUserReservations,
  getHomeReservations,
  postReservation,
  updateReservation,
} from "./reservationActions";

const initialState = {
  reservationsList: [],
  reservationDetail: {},
  userReservationsList: [],
  homeReservationsList: [],
  error: null,
  status: "",
};

export const reservation = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    getReservation(state, action) {
      state.reservationDetail = state.reservationsList.filter((reservation) => {
        return reservation.id === action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        state.status = "succeded";
        state.usersList = action.payload;
      })
      .addCase(getReservations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getReservation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getReservation.fulfilled, (state, action) => {
        state.status = "succeded";
        state.userDetail = action.payload;
      })
      .addCase(getReservation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getUserReservations.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserReservations.fulfilled, (state, action) => {
        state.status = "succeded";
        state.userReservationsList = action.payload;
      })
      .addCase(getUserReservations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getHomeReservations.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHomeReservations.fulfilled, (state, action) => {
        state.status = "succeded";
        state.homeReservationsList = action.payload;
      })
      .addCase(getHomeReservations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(postReservation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postReservation.fulfilled, (state, action) => {
        state.status = "succeded";
        state.reservationDetail = action.payload;
      })
      .addCase(postReservation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateReservation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateReservation.fulfilled, (state, action) => {
        state.status = "succeded";
        state.reservationDetail = action.payload;
      })
      .addCase(updateReservation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
