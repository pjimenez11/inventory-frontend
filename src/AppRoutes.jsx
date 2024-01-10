import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./auth/pages/LoginPage";
import AdminRoute from "./routes/AdminRoute";
import useAuth from "./auth/hooks/useAuth";
import { useEffect } from "react";
import useNavigated from "./hooks/useNavigated";
import UserRoute from "./routes/UserRoute";
import useAssets from "./hooks/useAssets";
import NewSuggestionsAnonimo from "./components/suggestions/NewSuggestionsAnonimo";

export default function AppRoutes() {
  const { login } = useAuth();
  const { rolesNavigate } = useNavigated();
  const { handlerGetAll } = useAssets();
  useEffect(() => {
    handlerGetAll();
  }, []);
  return (
    <>
      <Routes>
        {login.isAuth ? (
          rolesNavigate(login.user.roles) == "TECHNICIAN" ? (
            <>
              <Route path="/inventory/*" element={<AdminRoute />} />
              <Route path="/*" element={<Navigate to="/inventory" />} />
            </>
          ) : (
            <>
              <Route path="/inventory/*" element={<UserRoute />} />
              <Route path="/*" element={<Navigate to="/inventory" />} />
            </>
          )
        ) : (
          <>
            <Route path="/*" element={<Navigate to="/login" />} />
            <Route path="/sugerencias/nuevo" element={<NewSuggestionsAnonimo />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
