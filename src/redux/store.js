
import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
// import usersReducer from "../features/users/usersSlice.jsx";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})
