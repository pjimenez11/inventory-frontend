import { useParams } from "react-router-dom";
import FormLaboratory from "./FormLaboratory";
import useLaboratory from "../../hooks/useLaboratory";
import { useEffect } from "react";

export default function EditLaboratory() {
  const { idLaboratory } = useParams();
  const { modifyEditLaboratory, laboratoryEdit, handlerUpdateLaboratory, handlerGetById } =
    useLaboratory();

  useEffect(() => {
    if (idLaboratory) {
      handlerGetById(idLaboratory);
    }
  }, [idLaboratory]);

  const onChage = (e) => {
    modifyEditLaboratory({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handlerUpdateLaboratory();
  };

  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Editar laboratorio
      </h1>
      <FormLaboratory
        values={laboratoryEdit}
        onChage={onChage}
        onSubmit={onSubmit}
      />
    </section>
  );
}
