import { Navigate } from "react-router-dom";
import { useAuth } from "../src/Components/context/AuthContext.jsx";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  console.log(user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
