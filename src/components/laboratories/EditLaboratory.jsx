import { useParams } from "react-router-dom";
import FormLaboratory from "./FormLaboratory";

export default function EditLaboratory() {
    const { idLaboratory } = useParams();
  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">Editar laboratorio</h1>
      <FormLaboratory />
    </section>
  );
}