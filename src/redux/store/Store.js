import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../slices/User.slice";

const Store = configureStore({
  reducer: {
    userData: UserSlice,
  },
});

export default Store;
