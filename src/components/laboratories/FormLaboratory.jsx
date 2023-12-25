import { TEInput } from "tw-elements-react";

export default function FormLaboratory() {
  return (
    <form className="h-full w-2/3 bg-oxford-blue-900 rounded-lg p-6">
      <div className="grid grid-cols-1 gap-6 mt-4 ">
        <div>
          <label className=" text-gray-200" for="username">
            Nombre
          </label>
          <input
            id="username"
            type="text"
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className=" text-gray-200" for="emailAddress">
            Descripción
          </label>
          <input
            id="emailAddress"
            type="email"
            className="block w-full px-4 py-2 mt-2 border rounded-md bg-oxford-blue-950 text-gray-300 
            border-oxford-blue-600 focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400 
            focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className=" text-gray-200" for="password">
            Edificio
          </label>
          <input
            id="password"
            type="password"
            className="block w-full px-4 py-2 mt-2 border rounded-md bg-oxford-blue-950 text-gray-300 
            border-oxford-blue-600 focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400 
            focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className=" text-gray-200" for="passwordConfirmation">
            Password Confirmation
          </label>
          <input
            id="passwordConfirmation"
            type="password"
            className="block w-full px-4 py-2 mt-2 border rounded-md bg-oxford-blue-950 text-gray-300 
            border-oxford-blue-600 focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400 
            focus:outline-none focus:ring"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform 
        bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
