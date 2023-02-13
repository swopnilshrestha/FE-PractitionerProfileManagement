import { useAppSelector } from "../../store";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { isLoggedIn } = useAppSelector((state) => state.currentUserData);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
