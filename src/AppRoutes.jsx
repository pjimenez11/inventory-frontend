import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./auth/pages/LoginPage";
import AdminRoute from "./routes/AdminRoute";
import useAuth from "./auth/hooks/useAuth";
import { useUser } from "./hooks/useUser";
import { useSuggestion } from "./hooks/useSuggestion";
import { useEffect } from "react";

export default function AppRoutes() {
  const { login } = useAuth();
  const { handlerGetUsers, handlerUpdateUser, handlerGetUser } = useUser();
  const { handlerGetSuggestions } = useSuggestion();

  useEffect(() => {
    
      handlerGetUsers();
      handlerGetSuggestions();
    }
  , []);


  return (
    <>
      <Routes>
        {login.isAuth ? (
          <>
            <Route path="/inventory/*" element={<AdminRoute />} />
            <Route path="/*" element={<Navigate to="/inventory" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
