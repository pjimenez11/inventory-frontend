import TableUsers from "./TableUsers";
import { NavLink } from "react-router-dom";

const Users = () => {
    return (
        <div>
            <div className="flex flex-row justify-between m-2">
            <h2 className="text-2xl font-bold text-white">Usuarios</h2>
            <NavLink to={"/inventory/usuarios/nuevo"} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg  hover:bg-blue-500 bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >Nuevo usuario
                    </NavLink>
            </div>
            <TableUsers/>
        </div>
    );
};

export default Users;