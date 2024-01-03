import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./auth/pages/LoginPage";
import AdminRoute from "./routes/AdminRoute";
import useAuth from "./auth/hooks/useAuth";
import { useUser } from "./hooks/useUser";
import { useEffect } from "react";
import useNavigated from "./hooks/useNavigated";
import UserRoute from "./routes/UserRoute";

export default function AppRoutes() {
  const { login } = useAuth();
  const { rolesNavigate } = useNavigated();
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
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
