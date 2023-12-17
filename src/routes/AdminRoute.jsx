import { Navigate, Route, Routes } from "react-router";
import Header from "../components/layout/Header";
import SidebarDestok from "../components/layout/SidebarDestok";
import { Laboratories } from "../components/laboratories/Laboratories";
import LoandingSpiner from "../components/layout/LoandingSpiner";

export default function AdminRoute() {
  return (
    <>
      <Header />
      <SidebarDestok />
      <div className="fixed left-0 md:left-64 top-16 bottom-0 right-0 overflow-auto md:rounded-ss-3xl bg-oxford-blue-950 transition-all p-6">
        <main className="w-full">
          <Routes>
            <Route path="/laboratorios" element={<Laboratories/>} />
            <Route path="/bienes" element={<h1>Bienes</h1>} />
            <Route path="/sugerencias" element={<LoandingSpiner />                                                                                                                                    } />
            <Route path="/usuarios" element={<h1>Usuarios</h1>} />
            
            <Route path="/*" element={<Navigate to="/inventory/laboratorios" />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
