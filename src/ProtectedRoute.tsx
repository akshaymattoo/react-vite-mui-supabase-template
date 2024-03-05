import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/Auth";
import AppBar from "./components/BottomAppBar";
const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();
  console.log(user);
  if (!user) {
    console.log("user not authenticated");
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return  <>
  <AppBar />
  {children}
  
</>;
};

export default ProtectedRoute;