import { MdCheck, MdOutlineCancel, MdOutlineCreate } from "react-icons/md";
import { NavLink} from "react-router-dom";

export default function RowSuggestions({ suggestion, index }) {



  console.log();

  return (
    <tr key={index}>
      <td className="px-4 py-4 text-sm font-medium text-gray-200 whitespace-nowrap">
        {index + 1}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {suggestion.description}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {suggestion.asset_id}
      </td>
     
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {suggestion.suggestor_type}
      </td>
     
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {suggestion.suggestor_id}
      </td>
     
    </tr>
  );
}
