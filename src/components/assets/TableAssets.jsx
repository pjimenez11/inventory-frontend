import { useEffect } from "react";
import RowAssets from "./RowAsset";
import useAssets from "../../hooks/useAssets";

const assets = [
  {
    id: 1,
    name: "Compudatora",
    description: "Computadora de escritorio",
    stock: true,
    amount: 2,
    custodio: "Juan Perez",
    laboratory: "Laboratorio 1",
  },
  {
    id: 2,
    name: "Compudatora",
    description: "Computadora de escritorio",
    stock: true,
    amount: 2,
    custodio: "Juan Perez",
    laboratory: "Laboratorio 1",
  },
  {
    id: 3,
    name: "Marcadores",
    description: "Computadora de escritorio",
    stock: false,
    amount: 4,
    custodio: "Juan Perez",
    laboratory: "Laboratorio 4",
  },
];

export default function TableAssets() {
  const { assets, handlerGetAll } = useAssets();
  useEffect(() => {
    handlerGetAll();
    console.log(assets);
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
                  Descripcion
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Stock
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Cantidad
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Custodio
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  Laboratorio
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
              {assets.map((asset, index) => (
                <RowAssets key={index} asset={asset} index={index} />
              ))}
            </tbody>
          </table>
        </div>{" "}
      </div>
    </div>
  );
}
