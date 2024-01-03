import { useParams } from "react-router-dom";
import { useEffect } from "react";
import usePeripherals from "../../hooks/usePeripherals";
import FormPeripherals from "./FormPeripherals";

export default function EditPeripherals() {
  const { id } = useParams();

  const {
    modifyEditPeripherals,
    peripheralEdit,
    handlerUpdatePeripherals,
    handlerGetById,
  } = usePeripherals();

  useEffect(() => {
    if (id) {
      handlerGetById(id);
    }
  }, [id]);

  const onChage = (e) => {
    modifyEditPeripherals({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handlerUpdatePeripherals();
  };

  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Editar Periferico
      </h1>
      <FormPeripherals
        values={peripheralEdit}
        onChage={onChage}
        onSubmit={onSubmit}
      />
    </section>
  );
}
