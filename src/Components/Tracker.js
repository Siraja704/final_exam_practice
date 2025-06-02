import React from "react";
import FormHabit from "./FormHabit";

const Tracker = () => {
  return (
    <div>
      This is the Tracker Application
      <h1>Habit Tracker</h1>
      <p>Track your habits and stay consistent!</p>
      <ul>
        <li>Daily Habits</li>
        <li>Weekly Goals</li>
        <li>Monthly Progress</li>
      </ul>
      <p>Use this app to monitor your habits and improve your productivity.</p>
      <FormHabit />
    </div>
  );
};

export default Tracker;
