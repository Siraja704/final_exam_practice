import React from "react";
import "./Home.css"; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>
        This is the home page of our application. You can navigate to different
        sections using the navigation bar.
      </p>
      <p>Feel free to explore the features we have implemented!</p>
      <p>
        Use the links in the navigation bar to access the Counter, Counter_r,
        and Form components.
      </p>
      <p>Enjoy your stay!</p>
      <div className="Outline">
        <p className="Text-outline"> Course outline I have done So far </p>
      </div>
      <form>
        <input type="checkbox" id="router-routing" name="router-routing" />
        <label htmlFor="router-routing">Router Routing</label>

        <br />
        <input type="checkbox" id="useReducer" name="useReducer" />
        <label htmlFor="useReducer">Use Reducer</label>
        <br />
        <input type="checkbox" id="useFormik" name="useFormik" />
        <label htmlFor="useFormik">Use Formik</label>
        <br />
        <input type="checkbox" id="useState" name="useState" />
        <label htmlFor="useState">Use State</label>
        <br />
        <input type="checkbox" id="useEffect" name="useEffect" />
        <label htmlFor="useEffect">Use Effect</label>
        <br />
        <input type="checkbox" id="useContext" name="useContext" />
        <label htmlFor="useContext">Use Context</label>
        <br />
        <input type="checkbox" id="useRef" name="useRef" />
        <label htmlFor="useRef">Use Ref</label>
        <br />
      </form>
    </div>
  );
};

export default Home;
