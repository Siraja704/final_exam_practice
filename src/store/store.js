import { configureStore } from "@reduxjs/toolkit";
import HabitReducer from "./habitSlice";

const store = configureStore({
  reducer: {
    habit: HabitReducer,
  },
});

export default store;
