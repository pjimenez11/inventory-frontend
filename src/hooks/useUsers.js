import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUsersEdit, usersClearEdit, usersError, usersLoading, usersNew, usersSuccess } from "../store/slices/user/userSlice";
import { createUsers, deleteUsers, getAllUsers, updateUsers } from "../services/usersServices";
import Swal from "sweetalert2";

const useUsers = () => {
    const { users, user, userEdit, loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerGetAll = async () => {
        try {
            dispatch(usersLoading())
            const response = await getAllUsers()
            dispatch(usersSuccess(response.data))
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro obtener los usuarios!',
            })
            dispatch(usersError(error))
        }
    }

    const modifyNewUsers = (values) => {
        dispatch(usersNew(values))
    }

    const saveUsers = async () => {
        try {
            await createUsers(user)
            getAllUsers()
            navigate("/inventory/usuarios")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro guardar!',
            })
        }
    }

    const modifyEditUsers = (values) => {
        dispatch(changeUsersEdit(values))
    }

    const handlerUpdateUsers = async () => {
        try {
            await updateUsers(userEdit)
            dispatch(usersClearEdit())
            getAllUsers()
            navigate("/usuarios")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro actualizar!',
            })
        }
    }

    const handlerGetById = async (id) => {
        const user = users.find(user => user.id == id)
        if (!user) {
            navigate("/inventory/usuarios")
            return
        }
        dispatch(loadUsersEdit(user))
    }

    const handlerRemoveUsers = async (id) => {
        try {
            const result = await Swal.fire({
                title: '¿Estas seguro?',
                text: "No podras revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            })
            if (result.isConfirmed) {
                await deleteUsers(id)
                getAllUsers()
                Swal.fire(
                    'Eliminado!',
                    'El usuario ha sido eliminado.',
                    'success'
                )
                navigate("/inventory/usuarios")
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro eliminar!',
            })
        }
    }

    const handlerAsinedUser = (id) => {
        dispatch(asignarUser(id))
    }

    return {
        users,
        user,
        userEdit,
        loading,
        error,
        handlerGetAll,
        modifyNewUsers,
        saveUsers,
        modifyEditUsers,
        handlerUpdateUsers,
        handlerGetById,
        handlerRemoveUsers,
        handlerAsinedUser
    };
};

export default useUsers;