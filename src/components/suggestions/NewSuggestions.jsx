import useSuggestion from "../../hooks/useSuggestion";
import FormSuggestions from "./FormSuggestions";

export default function NewSuggestions() {
  const { modifyNewSuggestions, suggestion, saveSuggestions } =
    useSuggestion();

  const onChage = (e) => {
    modifyNewSuggestions({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveSuggestions();
  };


  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Nueva sugerencia
      </h1>
      <FormSuggestions
        values={suggestion}
        onChage={onChage}
        onSubmit={onSubmit}
      />
    </section>
  );
}
