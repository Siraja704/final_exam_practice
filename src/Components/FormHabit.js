import React from "react";
import { useDispatch } from "react-redux";
import { addhabit } from "../store/habitSlice";
import HabitList from "./HabitDisplay";

const FormHabit = () => {
  const [name, setName] = React.useState("");
  const [frequency, setFrequency] = React.useState("daily");
  const [startDate, setStartDate] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return alert("Habit name cannot be empty");
    }

    const newHabit = {
      id: Date.now().toString(), // unique ID
      name,
      description: "",
      frequency: frequency === "daily" ? "Daily" : "Weekly", // keeping it simple
      startDate,
      completed: false,
      progress: 0,
      notes: "",
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    dispatch(addhabit(newHabit));
    console.log("Habit Data Submitted:", newHabit);

    // Clear form
    setName("");
    setFrequency("daily");
    setStartDate("");
  };

  return (
    <div>
      <h1>Habit Tracker Form</h1>
      <form onSubmit={handleSubmit}>
        {/* ✅ Fixed typo: onSumbit → onSubmit */}
        <label>
          Habit Name:
          <input
            type="text"
            name="habitName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Frequency:
          <select
            name="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            required
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Habit</button>
      </form>
      <HabitList />
    </div>
  );
};

export default FormHabit;
