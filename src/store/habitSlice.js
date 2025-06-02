import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Habits: [],
};

const HabitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addhabit: (state, action) => {
      const newHabit = {
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        frequency: action.payload.frequency,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        completed: false,
        progress: 0,
        notes: action.payload.notes || "",
        tags: action.payload.tags || [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.Habits.push(newHabit);
    },
  },
});

export const { addhabit } = HabitSlice.actions;
export default HabitSlice.reducer;
