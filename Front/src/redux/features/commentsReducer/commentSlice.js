import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getComments,
  getComment,
  getUserComments,
  getHomeComments,
  postComment,
  updateComment,
} from "./commentActions";

const initialState = {
  commentsList: [],
  commentDetail: {},
  userCommentsList: [],
  homeCommentsList: [],
  error: null,
  status: "",
};

export const comment = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getComment(state, action) {
      state.value.commentDetail = state.commentsList.filter((comment) => {
        return comment.id === action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.status = "succeded";
        state.commentsList = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getUserComments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserComments.fulfilled, (state, action) => {
        state.status = "succeded";
        state.userCommentsList = action.payload;
      })
      .addCase(getUserComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getHomeComments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHomeComments.fulfilled, (state, action) => {
        state.status = "succeded";
        state.homeCommentsList = action.payload;
      })
      .addCase(getHomeComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(postComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.status = "succeded";
        state.commentDetail = action.payload;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.status = "succeded";
        state.commentDetail = action.payload;
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
