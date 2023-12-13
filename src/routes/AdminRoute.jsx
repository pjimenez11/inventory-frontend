import { Navigate, Route, Routes } from "react-router";

export default function AdminRoute() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<h1>Admin</h1>} />
        <Route path="/*" element={<Navigate to="/inventory/admin" />} />
      </Routes>
    </>
  );
}
