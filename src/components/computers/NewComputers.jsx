import useAssets from "../../hooks/useAssets";
import useComputers from "../../hooks/useComputers";
import FormComputers from "./FormComputers";
import FormAsset from "./FormComputers";

export default function NewComputers() {
  const { modifyNewComputers, computer, saveComputers } = useComputers();

  const onChage = (e) => {
    modifyNewComputers({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveComputers();
  };

  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Nueva Computadora
      </h1>
      <FormComputers values={computer} onChage={onChage} onSubmit={onSubmit} />
    </section>
  );
}
