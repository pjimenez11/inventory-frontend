import useAssets from "../../hooks/useAssets";
import FormAsset from "./FormAsset";

export default function NewAsset() {
  const { modifyNewAssets, asset, saveAssets } = useAssets();

  const onChage = (e) => {
    modifyNewAssets({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveAssets();
  };

  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Nuevo Bien
      </h1>
      <FormAsset values={asset} onChage={onChage} onSubmit={onSubmit}/>
    </section>
  );
}
