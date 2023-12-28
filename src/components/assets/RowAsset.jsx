import { MdCheck, MdOutlineCancel, MdOutlineCreate } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

export default function RowAssets({ asset, index }) {
  const navigate = useNavigate();

  const onStatus = (status) => {
    console.log(status);
    if (status === true) {
      return "Aprobado";
    }
    if (status === false) {
      return "Asignado";
    }
  };

  const onNavigate = (id) => {
    navigate(`/inventory/bienes/${id}`);
  };

  console.log(asset);

  return (
    <tr key={index}>
      <td className="px-4 py-4 text-sm font-medium text-gray-200 whitespace-nowrap">
        {index + 1}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {asset.name}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {asset.description}
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div
          className={`inline-flex items-center p-2 rounded-full gap-x-2 ${
            asset.stock === true && "text-emerald-500 bg-emerald-100/60"
          } ${
            asset.stock === false && "text-red-500 bg-red-100/60"
          } bg-gray-800`}
        >
          {asset.stock === true && <MdCheck className="w-4 h-4" />}
          {asset.stock === false && <MdOutlineCancel className="w-4 h-4" />}
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {asset.amount}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <img
            className="object-cover w-8 h-8 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
            alt=""
          />
          <div>
            <h2 className="text-sm font-medium text-white ">
              {asset.custodio}
            </h2>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {asset.laboratory}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <NavLink to={`/inventory/bienes/editar/${asset.id}`} className=" transition-colors duration-200 hover:text-yellow-500 text-gray-300 focus:outline-none">
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </NavLink>
          
          <button className="transition-colors duration-200 hover:text-red-500 text-gray-300 focus:outline-none">
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
