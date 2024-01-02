
import {useSuggestion} from "../../hooks/useSuggestion"; 
import RowSuggestions from "./RowSuggestions";

export default function TableSuggestions() {
    const { suggestions } = useSuggestion();
  return (
    <div className="overflow-x-auto w-full">
      <div className="inline-block min-w-full  align-middle ">
        <div className="overflow-hidden border border-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-700 rounded">
            <thead className="bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Nro
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Titulo
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Descripcion
                </th>

              </tr>
              
            </thead>
            <tbody className="divide-y divide-gray-700 bg-gray-900">
              {suggestions.map((suggestion, index) => (
                <RowSuggestions key={index} suggestion={suggestion} index={index} />
              ))}
            </tbody>
          </table>
        </div>{" "}
      </div>
    </div>
  );
}