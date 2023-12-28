import FormAsset from "./FormAsset";

export default function EditAsset() {
  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Editar Bien
      </h1>
      <FormAsset />
    </section>
  );
}