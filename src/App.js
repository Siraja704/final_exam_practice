import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CounterR from "./Components/CounterR";
import Counter from "./Components/Counter";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";
import User from "./Components/User";
import Home from "./Components/Home";
import Tracker from "./Components/Tracker";
import store from "./store/store";
import { Provider } from "react-redux";

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
    path: "/User",
    element: (
      <>
        <NavBar />
        <User />
      </>
    ),
  },
  {
    path: "/counterR",
    element: (
      <>
        <NavBar />
        <CounterR />
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
  {
    path: "/Tracker",
    element: (
      <>
        <NavBar />
        <Tracker />
      </>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
