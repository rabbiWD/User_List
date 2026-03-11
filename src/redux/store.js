
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice.jsx";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});