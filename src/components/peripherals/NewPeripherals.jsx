import usePeripherals from "../../hooks/usePeripherals";
import FormPeripherals from "./FormPeripherals";

export default function NewPeripherals() {
  const { modifyNewPeripherals, peripheral, savePeripherals } =
    usePeripherals();

  const onChage = (e) => {
    modifyNewPeripherals({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    savePeripherals();
  };

  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Nuevo periferico
      </h1>
      <FormPeripherals values={peripheral} onChage={onChage} onSubmit={onSubmit} />
    </section>
  );
}
