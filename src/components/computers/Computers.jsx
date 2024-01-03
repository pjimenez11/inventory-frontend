import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import TableComputers from "./TableComputers";
import useComputers from "../../hooks/useComputers";

export function Computers() {
  const {computers} = useComputers();
  return (
    <section className="min-h-max min-w-max flex flex-col gap-6 items-center p-6 bg-oxford-blue-900 rounded-lg">
      <div className="sm:flex sm:items-center sm:justify-between w-full">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-white">Computadoras</h2>

            <span className="px-3 py-1 text-xs  rounded-full bg-gray-800 text-blue-400">
              {computers.length}
            </span>
          </div>

          <p className="mt-1 text-sm  text-gray-300">
            Lista de Computadoras registradas
          </p>
        </div>

        <div className="flex items-center mt-4 gap-x-3">
          <NavLink
            to={"/inventory/computadoras/nuevo"}
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2  hover:bg-blue-500 bg-blue-600"
          >
            <IoIosAddCircleOutline className="w-5 h-5" />

            <span>Agregar computadoras</span>
          </NavLink>
        </div>
      </div>
      <div className="w-full md:flex md:items-center md:justify-between">
        <div className="relative flex items-center mt-4 md:mt-0 ">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 mx-3 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Search"
            className="block w-full py-1.5 pr-5 border rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 bg-gray-900 text-gray-300 border-gray-600  focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>
      <TableComputers />;
    </section>
  );
}
