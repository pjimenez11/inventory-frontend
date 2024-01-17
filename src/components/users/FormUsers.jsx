export default function FormUsers({ values, onChage, onSubmit }) {
  return (
    <form
      className="h-full w-2/3 bg-oxford-blue-900 rounded-lg p-6"
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-6 mt-4 ">
        <div>
          <label className=" text-gray-200" for="first_name">
            Nombre
          </label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            value={values.first_name}
            onChange={onChage}
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
            minLength={2}
            maxLength={20}
            required
          />
        </div>
        <div>
          <label className=" text-gray-200" for="last_name">
            Apellido
          </label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            value={values.last_name}
            onChange={onChage}
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
            minLength={2}
            maxLength={20}
            required
          />
        </div>
        <div>
          <label className=" text-gray-200" for="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={onChage}
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
            required
          />
        </div>
        <div>
          <label className=" text-gray-200" for="username">
            Usuario
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={values.username}
            onChange={onChage}
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
            required
          />
        </div>
        <div>
          <label className=" text-gray-200" for="password">
            Contraseña
          </label>
          <input
            id="password"
            type="text"
            name="password"
            value={values.password}
            onChange={onChage}
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
            minLength={6}
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
