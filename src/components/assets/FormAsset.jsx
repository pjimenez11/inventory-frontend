import { TEInput } from "tw-elements-react";

export default function FormAsset() {
  return (
    <form className="h-full w-2/3 bg-oxford-blue-900 rounded-lg p-6">
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
          <label className=" text-gray-200" for="description">
            Descripción
          </label>
          <textarea
            id="description"
            type="text"
            className="block w-full px-4 py-2 mt-2 border rounded-md bg-oxford-blue-950 text-gray-300 
            border-oxford-blue-600 focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400 
            focus:outline-none focus:ring"
            maxLength={200}
          />
        </div>

        <div>
          <label className=" text-gray-200" for="description">
            Cantidad
          </label>
          <textarea
            id="description"
            type="text"
            className="block w-1/6 h-1/2 px-4 py-2 mt-2 border rounded-md bg-oxford-blue-950 text-gray-300 
            border-oxford-blue-600 focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400 
            focus:outline-none focus:ring"
            maxLength={200}
          />
        </div>

        <div className="flex flex-wrap items-stretch w-full">
          <label
            className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid dark:bg-gray-900 bg-gray-300 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            htmlFor="inputGroupSelect01"
          >
            Computadora
          </label>
          <select
            className="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-gray-800 bg-oxford-blue-950 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="inputGroupSelect01"
            value=""
          >
            <option value="">Seleccionar...</option>
          </select>
        </div>

        <div className="flex flex-wrap items-stretch w-full">
          <label
            className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid dark:bg-gray-900 bg-gray-300 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            htmlFor="inputGroupSelect01"
          >
            Laboratorio
          </label>
          <select
            className="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-gray-800 bg-oxford-blue-950 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="inputGroupSelect01"
            value=""
          >
            <option value="">Seleccionar...</option>
          </select>
        </div>

        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            value=""
            id="checkboxDefault"
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-200"
            for="checkboxDefault"
          >
            Disponibilidad
          </label>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2  hover:bg-blue-500 bg-blue-600"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
