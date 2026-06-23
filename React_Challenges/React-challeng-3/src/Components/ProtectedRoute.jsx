import { Navigate } from "react-router-dom";

const isLoggedIn = true;

const ProtectedRoute = ({ children }) => {
  return isLoggedIn? children: <Navigate to="/" />;
};

export default ProtectedRoute;