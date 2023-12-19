import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getHomes, postHome, updateHome } from "./homeActions";

const initialState = {
  homesList: [],
  homeDetail: {},
  error: null,
  status: "",
};

export const home = createSlice({
  name: "home",
  initialState,
  reducers: {
    getHome(state, action) {
      state.value.homeDetail = state.homesList.filter((home) => {
        return home.id === action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHomes.fulfilled, (state, action) => {
        state.status = "succeded";
        state.homesList = action.payload;
      })
      .addCase(getHomes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(postHome.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postHome.fulfilled, (state, action) => {
        state.status = "succeded";
        state.homeDetail = action.payload;
      })
      .addCase(postHome.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateHome.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateHome.fulfilled, (state, action) => {
        state.status = "succeded";
        state.homeDetail = action.payload;
      })
      .addCase(updateHome.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
