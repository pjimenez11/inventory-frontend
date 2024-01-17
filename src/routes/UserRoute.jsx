import { Navigate, Route, Routes } from "react-router";
import Header from "../components/layout/Header";
import { useEffect } from "react";
import useLaboratory from "../hooks/useLaboratory";
import useComputers from "../hooks/useComputers";
import usePeripherals from "../hooks/usePeripherals";
import useAssets from "../hooks/useAssets";
import NewSuggestions from "../components/suggestions/NewSuggestions";
import useAuth from "../auth/hooks/useAuth";
import useSuggestion from "../hooks/useSuggestion";
import SidebarDestok from "../components/layout/SidebarDestok";

export default function UserRoute() {
  const { handlerGetAll: getLaboratory } = useLaboratory();
  const { handlerGetAll: getComputers } = useComputers();
  const { handlerGetAll: getPeripherals } = usePeripherals();
  const { handlerGetAll: getSuggestions, handlerAsinedSuggestor } =
    useSuggestion();
  const { login } = useAuth();

  useEffect(() => {
    getLaboratory();
    getComputers();
    getPeripherals();
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
