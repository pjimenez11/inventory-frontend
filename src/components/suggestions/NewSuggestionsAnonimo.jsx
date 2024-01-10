import useSuggestion from "../../hooks/useSuggestion";
import FormSuggestions from "./FormSuggestions";

export default function NewSuggestionsAnonimo() {
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
    <section className="h-screen w-full flex flex-col gap-6 items-center justify-center pb-6">
      <div className="flex flex-col gap-6 items-center pb-6 w-2/3">
      <h1 className="text-white text-center font-semibold text-lg">
        Nueva sugerencia anónima
      </h1>
      <FormSuggestions
        values={suggestion}
        onChage={onChage}
        onSubmit={onSubmit}
      />
        </div>
    </section>
  );
}