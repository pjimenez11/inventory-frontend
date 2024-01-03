import { NavLink } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export default function UpdateUser() {
    const { handlerUpdateUser } = useUser();
  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Actualizar usuario
      </h1>
      <form className=" h-full w-2/3 bg-oxford-blue-900 rounded-lg p-6 ">
        <div className="grid grid-cols-1 gap-6 mt-4 ">
        <div>
          <label className=" text-gray-200" for="name">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label className=" text-gray-200" for="name">
            Apellido
          </label>
          <input
            id="name"
            type="text"
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label className=" text-gray-200" for="name">
            Email
          </label>
          <input
            id="name"
            type="text"
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label className=" text-gray-200" for="name">
            Nombre de usuario
          </label>
          <input
            id="name"
            type="text"
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
          />
        </div>

        </div>
  
        <div className="flex justify-end mt-6">
          <NavLink
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2  hover:bg-blue-500 bg-blue-600"
            on
          >
            Guardar
          </NavLink>
        </div>
      </form>
    );
    </section>
  );
}