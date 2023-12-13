import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./auth/pages/LoginPage";
import AdminRoute from "./routes/AdminRoute";
import useAuth from "./auth/hooks/useAuth";

export default function AppRoutes() {
  const { login } = useAuth();
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
