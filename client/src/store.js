import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./reducers/modeReducer";

const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});

export default store;
