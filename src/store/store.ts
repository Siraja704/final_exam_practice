import { configureStore } from "@reduxjs/toolkit";
import HabitReducer from "./habitSlice.ts";

const store = configureStore({
  reducer: {
    habit: HabitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
