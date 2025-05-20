import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice";

const getStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default getStore;