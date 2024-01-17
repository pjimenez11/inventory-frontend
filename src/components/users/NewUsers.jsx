import useUsers from "../../hooks/useUsers";
import FormUsers from "./FormUsers";

export default function NewUsers() {
  const { modifyNewUsers, user, saveUsers } = useUsers();

  const onChage = (e) => {
    modifyNewUsers({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveUsers();
  };

  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Nuevo Usuario
      </h1>
      <FormUsers values={user} onChage={onChage} onSubmit={onSubmit} />
    </section>
  );
}
