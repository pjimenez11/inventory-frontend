import { NavLink } from "react-router-dom";
import { MdCheck, MdOutlineCancel } from "react-icons/md";
import useSuggestion from "../../hooks/useSuggestion";

export default function RowSuggestions({ suggestion, index }) {
  const { handlerRemoveSuggestions, handlerCreateActivity } = useSuggestion();

  return (
    <tr key={index}>
      <td className="px-4 py-4 text-sm font-medium text-gray-200 whitespace-nowrap">
        {index + 1}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 max-w-[250px]">
        {suggestion.title}
      </td>
      <td className="px-4 py-4  text-sm text-gray-300 max-w-[250px]">
        {suggestion.description}
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div
          className={`inline-flex items-center p-2 rounded-full gap-x-2 ${
            suggestion.status == "open" && "text-emerald-500 bg-emerald-100/60"
          } ${
            suggestion.status == "closed" && "text-red-500 bg-red-100/60"
          } bg-gray-800`}
        >
          {suggestion.status == "open" && <MdCheck className="w-4 h-4" />}
          {suggestion.status == "closed" && (
            <MdOutlineCancel className="w-4 h-4" />
          )}
        </div>
      </td>
      <td className="px-4 py-4  text-sm text-gray-300 max-w-[250px]">
        {suggestion.suggestor.first_name} {suggestion.suggestor.last_name}
      </td>
      <td className="px-4 py-4  text-sm text-gray-300 max-w-[250px]">
        {suggestion.activities.length > 0 &&
          `${suggestion.activities[0].actor.first_name} ${suggestion.activities[0].actor.last_name}`}
      </td>
      <td className="px-4 py-4  text-sm text-gray-300 max-w-[250px]">
        {suggestion.asset.name}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            className="transition-colors duration-200 hover:text-green-500 text-gray-300 focus:outline-none"
            onClick={() => handlerCreateActivity(suggestion.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
          <button
            className="transition-colors duration-200 hover:text-red-500 text-gray-300 focus:outline-none"
            onClick={() => handlerRemoveSuggestions(suggestion.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
