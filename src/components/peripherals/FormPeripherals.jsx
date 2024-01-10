import useAssets from "../../hooks/useAssets";
import useComputers from "../../hooks/useComputers";

export default function FormPeripherals({ values, onChage, onSubmit }) {
  const { computers } = useComputers();
  const { assets } = useAssets();
  return (
    <form
      className="h-full w-2/3 bg-oxford-blue-900 rounded-lg p-6"
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-6 mt-4 ">
        <div>
          <label className=" text-gray-200" for="name">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={onChage}
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
            maxLength={50}
            required
          />
        </div>

        <div>
          <label className=" text-gray-200" for="description">
            Descripción
          </label>
          <textarea
            id="description"
            type="text"
            name="description"
            value={values.description}
            onChange={onChage}
            className="block w-full px-4 py-2 mt-2 border rounded-md bg-oxford-blue-950 text-gray-300 
            border-oxford-blue-600 focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400 
            focus:outline-none focus:ring"
            maxLength={200}
            required
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
            value={values.computer_id}
            name="computer_id"
            onChange={onChage}
          >
            <option value="" disabled selected hidden>
              Seleccionar...
            </option>
            {computers.map((computer) => (
              <option key={computer.id} value={computer.id}>
                {computer.code} - {computer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap items-stretch w-full">
          <label
            className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid dark:bg-gray-900 bg-gray-300 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            htmlFor="inputGroupSelect01"
          >
            Bien
          </label>
          <select
            className="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-gray-800 bg-oxford-blue-950 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="inputGroupSelect01"
            value={values.asset_id}
            name="asset_id"
            onChange={onChage}
            required
          >
            <option value="" disabled selected hidden>
              Seleccionar...
            </option>
            {assets
              .filter((asset) => asset.computer === null)
              .map((asset) => (
                <option key={asset.id} value={asset.id}>
                  {asset.id} - {asset.name} - {asset.laboratory.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2  hover:bg-blue-500 bg-blue-600">
          Guardar
        </button>
      </div>
    </form>
  );
}
