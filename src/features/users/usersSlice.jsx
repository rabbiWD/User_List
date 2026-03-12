// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "https://jsonplaceholder.typicode.com/users";

// // Fetch Users
// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// // Add User
// export const addUser = createAsyncThunk("users/addUser", async (user) => {
//   const response = await axios.post(API_URL, user);
//   return response.data;
// });

// // Edit User
// export const editUser = createAsyncThunk("users/editUser", async (user) => {
//   const response = await axios.put(`${API_URL}/${user.id}`, user);
//   return response.data;
// });

// // Delete User
// export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
//   return id;
// });

// const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     users: [],
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.users = action.payload;
//       })
//       .addCase(addUser.fulfilled, (state, action) => {
//         state.users.push(action.payload);
//       })
//       .addCase(editUser.fulfilled, (state, action) => {
//         const index = state.users.findIndex(u => u.id === action.payload.id);
//         if (index !== -1) state.users[index] = action.payload;
//       })
//       .addCase(deleteUser.fulfilled, (state, action) => {
//         state.users = state.users.filter(u => u.id !== action.payload);
//       });
//   }
// });

// export default usersSlice.reducer;