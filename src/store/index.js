import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cottageReducer from "./slices/cottageSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    catalog: cottageReducer,
  },
});
