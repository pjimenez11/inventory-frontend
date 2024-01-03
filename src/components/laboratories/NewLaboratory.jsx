import FormLaboratory from "./FormLaboratory";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useLaboratory from "../../hooks/useLaboratory";

export default function NewLaboratory() {
  const { idEdificio } = useParams();
  const { modifyNewLaboratory, laboratory, saveLaboratory } = useLaboratory();

  useEffect(() => {
    if (idEdificio) {
      modifyNewLaboratory({ name: "building_number", value: parseInt(idEdificio) });
    }
  }, [idEdificio]);

  const onChage = (e) => {
    modifyNewLaboratory({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveLaboratory();
  };

  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Nuevo laboratorio
      </h1>
      <FormLaboratory values={laboratory} onChage={onChage} onSubmit={onSubmit} />
    </section>
  );
}
