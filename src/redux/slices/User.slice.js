import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://lms-api-e6xd.onrender.com/api/auth/sign-in";

export const getUserData = createAsyncThunk("getUserData", async (obj) => {
  const response = await axios.post(url, obj);
  return response
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLoading: false,
    data: {},
    isError: false,
    auth:false
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.auth = true
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    });
  },
});

export default userSlice.reducer;
