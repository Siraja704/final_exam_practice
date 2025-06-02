import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  description: string;
  frequency: "Daily" | "Weekly";
  startDate: string;
  endDate?: string;
  completed: boolean; // true if the habit is completed for the day
  progress: number; // percentage of completion
  notes?: string; // optional notes about the habit
  tags?: string[]; // optional tags for categorization
  createdAt: string; // ISO date string for when the habit was created
  updatedAt: string; // ISO date string for when the habit was last updated
}

interface HabitState {
  Habits: Habit[];
}

const initialState: HabitState = {
  Habits: [],
};

const HabitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addhabit: (state, action) => {
      const newHabit: Habit = {
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
