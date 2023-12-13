import { Navigate, Route, Routes } from "react-router";
import Header from "../components/layout/Header";
import SidebarDestok from "../components/layout/SidebarDestok";

export default function AdminRoute() {
  return (
    <>
      <Header />
      <SidebarDestok />
      <div className="fixed left-0 md:left-[273px] top-16 md:top-20 bottom-16 md:bottom-2 right-0 md:right-2 overflow-auto md:rounded-md bg-gray-50 transition-all p-2">
        <main className="w-full ">
          <Routes>
            <Route path="/laboratorios" element={<h1>Laboratorios</h1>} />
            <Route path="/bienes" element={<h1>Bienes</h1>} />
            <Route path="/sugerencias" element={<h1>Seguerencias</h1>} />
            <Route path="/usuarios" element={<h1>Usuarios</h1>} />
            
            <Route path="/*" element={<Navigate to="/inventory/laboratorios" />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
