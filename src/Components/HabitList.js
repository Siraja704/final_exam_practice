import React from "react";
import { useSelector } from "react-redux";
import "./habitList.css";

const HabitList = () => {
  const habit = useSelector((state) => state.habitReducer);

  console.log(useSelector);
  return (
    <div>
      <h1>All the List of habbits added in the Redux</h1>
      <ul className="habit-list">
        {habit.map((item, index) => (
          <li key={index} className="habit-item">
            <h2>{item.habit}</h2>
            <p>{item.description}</p>
          </li>
        ))}{" "}
      </ul>
      <p>Total Habits: {habit.length}</p>
    </div>
  );
};

export default HabitList;
