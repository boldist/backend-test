import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userAPI";

const initialState = {
  user: {},
  status: "idle",
};

export const requestUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await getUser();
  return response.data;
});

export const userSlice = createSlice({
  name: "userSlice",
  initialState,

  reducers: {
    getUser1: (state, action) => {
      state.user = [...state.user, action.user];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(requestUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(requestUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      });
  },
});

export const { getUser1 } = userSlice.actions;

export default userSlice.reducer;
