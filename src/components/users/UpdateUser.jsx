import FormUsers from "./FormUsers";

export default function UpdateUser() {
  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Actualizar usuario
      </h1>
      <FormUsers />
    </section>
  );
}