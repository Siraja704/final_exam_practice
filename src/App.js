import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter_r from "./Components/Counter_r";
import Counter from "./Components/Counter";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/counter_r",
    element: (
      <>
        <NavBar />
        <Counter_r />
      </>
    ),
  },
  {
    path: "/counter",
    element: (
      <>
        <NavBar />
        <Counter />
      </>
    ),
  },

  {
    path: "/Sign Up",
    element: (
      <>
        <NavBar />
        <Form />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
