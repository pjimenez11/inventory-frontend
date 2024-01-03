import { Navigate, Route, Routes } from "react-router";
import Header from "../components/layout/Header";
import SidebarDestok from "../components/layout/SidebarDestok";
import { Laboratories } from "../components/laboratories/Laboratories";
import EditLaboratory from "../components/laboratories/EditLaboratory";
import NewLaboratory from "../components/laboratories/NewLaboratory";
import { Assets } from "../components/assets/Assets";
import NewAsset from "../components/assets/NewAsset";
import EditAsset from "../components/assets/EditAsset";
import Users from "../components/users/Users";
import UpdateUser from "../components/users/UpdateUser";
import CreateUser from "../components/users/CreateUser";
import { Computers } from "../components/computers/Computers";
import NewComputers from "../components/computers/NewComputers";
import EditComputers from "../components/computers/EditComputers";
import { Peripherals } from "../components/peripherals/Peripherals";
import NewPeripherals from "../components/peripherals/NewPeripherals";
import { useEffect } from "react";
import useLaboratory from "../hooks/useLaboratory";
import useComputers from "../hooks/useComputers";
import usePeripherals from "../hooks/usePeripherals";
import useAssets from "../hooks/useAssets";
import EditPeripherals from "../components/peripherals/EditPeripherals";
import { Suggestions } from "../components/suggestions/Suggestions";
import FormSuggestions from "../components/suggestions/FormSuggestions";
import NewSuggestions from "../components/suggestions/NewSuggestions";
import useAuth from "../auth/hooks/useAuth";
import useSuggestion from "../hooks/useSuggestion";

export default function UserRoute() {
  const { handlerGetAll: getLaboratory } = useLaboratory();
  const { handlerGetAll: getComputers } = useComputers();
  const { handlerGetAll: getPeripherals } = usePeripherals();
  const { handlerGetAll: getAssets } = useAssets();
  const { handlerGetAll: getSuggestions, handlerAsinedSuggestor } =
    useSuggestion();
  const { login } = useAuth();

  useEffect(() => {
    getLaboratory();
    getComputers();
    getPeripherals();
    getAssets();
    getSuggestions();
    handlerAsinedSuggestor(login.user.id);
  }, []);

  return (
    <>
      <Header />
      <SidebarDestok />
      <div className="fixed left-0 md:left-64 top-16 bottom-0 right-0 overflow-auto md:rounded-ss-3xl bg-oxford-blue-950 transition-all">
        <main className="flex flex-col w-full h-full p-6">
          <Routes>
            <Route path="/sugerencias/nuevo" element={<NewSuggestions />} />
            
            <Route path="/*" element={<Navigate to="/inventory/sugerencias/nuevo" />} />

          </Routes>
        </main>
      </div>
    </>
  );
}
