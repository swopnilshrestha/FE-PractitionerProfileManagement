import "./style/App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoutes from "./pages/routes/PrivateRoutes";
import Dashboard from "./pages/protected/Dashboard";
import Login from "./pages/auth/Login";
import { AUTH_ROUTE, PROTECTED_ROUTE } from "./constants/routes";
import Home from "./pages/protected/Home";
import PractitionerList from "./pages/protected/Practitioner/PractitionerList/PractitionerList";
import PractitionerForm from "./pages/protected/Practitioner/PractitionerForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path="/"
            element={<Home />}
            children={[
              <Route
                path={PROTECTED_ROUTE.DASHBOARD}
                element={<Dashboard />}
              />,
              <Route
                path={PROTECTED_ROUTE.PRACTITIONER_LIST}
                element={<PractitionerList />}
              />,
              <Route
                path={PROTECTED_ROUTE.ADD_PRACTITIONER}
                element={<PractitionerForm />}
              />,
              <Route
                path={PROTECTED_ROUTE.UPDATE_PRACTITIONER}
                element={<PractitionerForm />}
              />,
              <Route
                path={PROTECTED_ROUTE.VIEW_PRACTITIONER}
                element={<PractitionerForm />}
              />,
              <Route
                path="/"
                element={<Navigate replace to={PROTECTED_ROUTE.DASHBOARD} />}
              />,
            ]}
          />
          <Route
            path="/"
            element={<Navigate replace to={PROTECTED_ROUTE.DASHBOARD} />}
          />
        </Route>
        <Route path={AUTH_ROUTE.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
