import * as Yup from "yup";
import commonLang from "../constants/lang/en/common";

export const practitionerSchema = Yup.object().shape({
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
  name: Yup.string().required("Name is required.").trim(),
  city: Yup.string().required("City is required.").trim(),
  phoneNumber: Yup.string().required("Phone number is required.").trim(),
});
