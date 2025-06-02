import React from "react";
import { useSelector } from "react-redux";
import "./habitList.css";

const HabitList = () => {
  const habits = useSelector((state) => state.habit.Habits); // ✅ corrected state access

  return (
    <div>
      <h1>All the List of Habits Added in Redux</h1>
      <ul className="habit-list">
        {habits.map((item, index) => (
          <li key={index} className="habit-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Frequency: {item.frequency}</p>
            <p>Start Date: {item.startDate}</p>
            <p>Completed: {item.completed ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
      <p>Total Habits: {habits.length}</p>
    </div>
  );
};

export default HabitList;
