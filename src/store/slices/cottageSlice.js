import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    const response = await axios(`${process.env.REACT_APP_SERVER}/catalog/get`);
    return response.data;
  }
);

export const cottageSlice = createSlice({
  name: "cottage",
  initialState: {
    catalog: [],
    status: "",
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchCatalog.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCatalog.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.catalog = action.payload;
    },
    [fetchCatalog.error]: (state) => {
      state.status = "error";
      state.error = "error";
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cottageSlice.actions;

export default cottageSlice.reducer;
