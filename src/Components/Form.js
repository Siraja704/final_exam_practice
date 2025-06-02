import React, { useEffect } from "react";
import { useFormik } from "formik";
import "./Form.css";
import { basicSchema } from "../schemas/index.js";

function onSubmit(values, actions) {
  console.log("Form submitted with values:", values);
  actions.setSubmitting(false);
}

function Form() {
  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      date: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: onSubmit,
  });

  console.log(errors);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>Form has been loaded </div>
        <p>Enter Your name</p>
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          required
          name="name"
          id="name"
          placeholder="Your name"
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}
        <p>Enter Your Email</p>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          name="email"
          id="email"
          className={errors.email && touched.email ? "input-error" : ""}
          placeholder="Example@email.com"
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <p>Enter Your Password</p>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          name="password"
          id="password"
          className={errors.password && touched.password ? "input-error" : ""}
          placeholder="Enter Password"
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <p>Enter Your Password</p>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <p>Enter Your Date of Birth</p>
        <input
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          type="date"
          name="age"
          id="age"
          className={errors.age && touched.date ? "input-error" : ""}
          placeholder="Your age"
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}

        <button className="SignUp" disabled={isSubmitting} type="submit">
          Sign Up
        </button>
      </form>

      <div>
        <h2>Form Values</h2>
        <p>Name: {values.name}</p>
        <p>email: {values.email}</p>
        <p>date: {values.age}</p>
      </div>
    </div>
  );
}

export default Form;
