import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers, getUser, postUser, updateUser } from "./userActions";

const initialState = {
  usersList: [],
  userDetail: {},
  error: null,
  status: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      state.userDetail = state.usersList.filter((user) => {
        return user.id === action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeded";
        state.usersList = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeded";
        state.userDetail = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(postUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.status = "succeded";
        state.userDetail = action.payload;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeded";
        state.userDetail = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
