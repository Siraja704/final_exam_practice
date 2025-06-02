import * as yup from "yup";

const passwordrules = /^(?=.*[A-Za-z])(?=.*\d).{5,}$/;

export const basicSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .matches(passwordrules, {
      message:
        "Password must contain at least one letter, one number, and be at least 5 characters long",
      excludeEmptyString: true,
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  age: yup.date().required("Date of Birth is required"),
});
