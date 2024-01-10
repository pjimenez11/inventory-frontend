export default function FormComputers({ values, onChage, onSubmit }) {
  return (
    <form
      className="h-full w-2/3 bg-oxford-blue-900 rounded-lg p-6"
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-6 mt-4 ">
      <div>
          <label className=" text-gray-200" for="name">
            Codigo
          </label>
          <input
            id="code"
            type="text"
            name="code"
            value={values.code}
            onChange={onChage}
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
            minLength={8}
            maxLength={8}
            required
          />
        </div>
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
      </div>

      <div className="flex justify-end mt-6">
        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2  hover:bg-blue-500 bg-blue-600">
          Guardar
        </button>
      </div>
    </form>
  );
}
