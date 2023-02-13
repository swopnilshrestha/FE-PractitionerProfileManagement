import { userLogin } from "../../services/user/user.service";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/loginSchema";
import { useDispatch } from "react-redux";
import { setAuthData } from "../../store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { PROTECTED_ROUTE } from "../../constants/routes";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const loginResponse = await userLogin(values);
        if (loginResponse) {
          dispatch(setAuthData({ accessToken: loginResponse.token }));
          navigate(PROTECTED_ROUTE.DASHBOARD);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={loginForm.handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              id="email"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              id="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
