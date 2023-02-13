import * as Yup from "yup";

import commonLang from "../constants/lang/en/common";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required.")
    .test("Email check", commonLang.INVALID_EMAIL, (value) => {
      if (value) {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return pattern.test(value as string);
      } else {
        return false;
      }
    })
    .trim()
    .lowercase(),
  password: Yup.string().required("Password is required."),
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required.")
    .test("Email check", commonLang.INVALID_EMAIL, (value) => {
      if (value) {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return pattern.test(value as string);
      } else {
        return false;
      }
    })
    .trim()
    .lowercase(),
  password: Yup.string().required("Password is required."),
  name: Yup.string().required("Name is required.").trim(),
});
