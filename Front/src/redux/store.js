import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/homeReducer/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    user: userSlice,
    reservation: reservationSlice,
    comment: commentSlice,
  },
});
