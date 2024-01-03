import { Navigate, Route, Routes } from "react-router";
import Header from "../components/layout/Header";
import SidebarDestok from "../components/layout/SidebarDestok";
import { Laboratories } from "../components/laboratories/Laboratories";
import LoandingSpiner from "../components/layout/LoandingSpiner";
import EditLaboratory from "../components/laboratories/EditLaboratory";
import NewLaboratory from "../components/laboratories/NewLaboratory";
import { Assets } from "../components/assets/Assets";
import NewAsset from "../components/assets/NewAsset";
import EditAsset from "../components/assets/EditAsset";
import Suggestions from "../components/suggestions/Suggestions";
import FormSuggestions from "../components/suggestions/FormSuggestions";
import Users from "../components/users/Users";
import UpdateUser from "../components/users/UpdateUser";
import CreateUser from "../components/users/CreateUser";

export default function AdminRoute() {
  return (
    <>
      <Header />
      <SidebarDestok />
      <div className="fixed left-0 md:left-64 top-16 bottom-0 right-0 overflow-auto md:rounded-ss-3xl bg-oxford-blue-950 transition-all">
        <main className="flex flex-col w-full h-full p-6">
          <Routes>
            <Route path="/laboratorios" element={<Laboratories />} />
            <Route
              path="/laboratorios/:idLaboratory"
              element={<EditLaboratory />}
            />
            <Route path="/laboratorios/nuevo/:idEdificio" element={<NewLaboratory />} />

            <Route path="/bienes" element={<Assets />} />
            <Route path="/bienes/nuevo" element={<NewAsset />} />
            <Route path="/bienes/editar/:id" element={<EditAsset />} />
            <Route path="/sugerencias" element={<Suggestions />} />
            <Route path="/sugerencias/nuevo" element={<FormSuggestions />} />
            <Route path="/usuarios" element={<Users/>} />
            <Route path="/usuarios/nuevo" element={<CreateUser/>} />
            <Route path="/usuarios/editar/:id" element={<UpdateUser/>} />

            <Route
              path="/*"
              element={<Navigate to="/inventory/laboratorios" />}
            />
          </Routes>
        </main>
      </div>
    </>
  );
}
