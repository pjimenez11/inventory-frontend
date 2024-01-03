import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useComputers from "../../hooks/useComputers";
import FormComputers from "./FormComputers";

export default function EditComputers() {
  const { id } = useParams();

  const {
    modifyEditComputers,
    computerEdit,
    handlerUpdateComputers,
    handlerGetById,
  } = useComputers();

  useEffect(() => {
    if (id) {
      handlerGetById(id);
    }
  }, [id]);

  const onChage = (e) => {
    modifyEditComputers({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handlerUpdateComputers();
  };

  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Editar Computadora
      </h1>
      <FormComputers
        values={computerEdit}
        onChage={onChage}
        onSubmit={onSubmit}
      />
    </section>
  );
}
