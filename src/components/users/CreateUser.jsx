
import { useUser } from "../../hooks/useUser";
import { useState } from "react";

export default function CreateUser() {
    const { handlerCreateUser } = useUser();
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData({
            ...userData,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handlerCreateUser(userData);
    };
  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Nuevo usuario
      </h1>
      <form className=" h-full w-2/3 bg-oxford-blue-900 rounded-lg p-6 "  onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 ">
        <div>
          <label className=" text-gray-200" for="name">
            Nombre
          </label>
          <input
            id="first_name"
            type="text"
            value={userData.first_name}
            onChange={handleInputChange}
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
            id="last_name"
            type="text"
            value={userData.last_name}
            onChange={handleInputChange}
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
            id="email"
            type="text"
            value={userData.email}
            onChange={handleInputChange}
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
            id="username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label className=" text-gray-200" for="name">
            Contraseña
          </label>
          <input
            id="password"
            type="text"
            value={userData.password}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-2   border  rounded-md bg-oxford-blue-950 text-gray-300
             border-oxford-blue-600  focus:ring-blue-500 focus:ring-opacity-40 focus:border-blue-400
              focus:outline-none focus:ring"
          />
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
    </section>
  );
}