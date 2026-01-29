import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";

export const store = configureStore({
  reducer: resumeReducer
});
