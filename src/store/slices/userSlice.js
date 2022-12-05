import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchToken = createAsyncThunk("user/fetchToken", async (token) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER}/auth/verify`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data.data.total;
});

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/user/registration`,
      {
        email: data.email,
        name: data.name,
        secondname: data.secondname,
        password: data.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response.data;
  }
);
export const fetchLogin = createAsyncThunk("user/fetchLogin", async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER}/user/login`,
    {
      email: data.email,
      password: data.password,
    }
  );
  localStorage.setItem("token", JSON.stringify(response.data.data.token));
  return response.data.data.token;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    auth: "",
    data: {},
    status: "",
  },
  reducers: {
    userClear: (state) => {
      state.data = {};
      state.token = "";
      state.auth = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    // Auth
    [fetchToken.pending]: (state) => {},
    [fetchToken.fulfilled]: (state, action) => {
      state.auth = "OK";
      state.data = action.payload;
    },

    // Login
    [fetchLogin.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.status = "resolved";
    },
    // Register
    [fetchRegister.pending]: (state, action) => {},
    [fetchRegister.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userClear } = userSlice.actions;

export default userSlice.reducer;
