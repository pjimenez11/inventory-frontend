import { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import RowUsers from "./RowUsers";

export default function TableUsers() {
  const { users, handlerGetAll } = useUsers();
  useEffect(() => {
    handlerGetAll();
  }, []);

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
                  Nombre
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Apellido
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Email
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Usuario
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Roles
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 bg-gray-900">
              {users.map((user, index) => (
                <RowUsers key={index} user={user} index={index} />
              ))}
            </tbody>
          </table>
        </div>{" "}
      </div>
    </div>
  );
}
