import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/loginSchema";
import { userSignUp } from "../../services/user/user.service";

const SignUp = () => {
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const response = await userSignUp(values);
        if (response) {
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={signUpForm.handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              id="name"
              type="text"
              className="form-control mt-1"
              placeholder="Enter full name"
              onChange={signUpForm.handleChange}
              value={signUpForm.values.name}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              id="email"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={signUpForm.handleChange}
              value={signUpForm.values.email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              id="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={signUpForm.handleChange}
              value={signUpForm.values.password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
