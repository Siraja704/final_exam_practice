import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";

import { browseRouter } from "react-router-dom";

const router = browseRouter;

let number = 0;
function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
