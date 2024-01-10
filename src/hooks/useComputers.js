import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeComputersEdit, computersClear, computersClearEdit, computersError, computersLoading, computersNew, computersSuccess, loadComputersEdit } from "../store/slices/computers/computersSlice";
import { createComputers, getAllComputers, removeComputers, updateComputers } from "../services/computersServices";
import Swal from "sweetalert2";

const useComputers = () => {
    const { computers, computer, computerEdit, loading, error } = useSelector((state) => state.computers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerGetAll = async () => {
        try {
            dispatch(computersLoading())
            const response = await getAllComputers();
            dispatch(computersSuccess(response.data))
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro obtener las computadoras!',
            })
            dispatch(computersError(error))
        }
    };

    const modifyNewComputers = (values) => {
        dispatch(computersNew(values))
    }

    const saveComputers = async () => {
        try {
            await createComputers(computer)
            dispatch(computersClear())
            navigate("/inventory/computadoras")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro guardar!',
            })
        }
    }

    const modifyEditComputers = (values) => {
        dispatch(changeComputersEdit(values))
    }

    const handlerUpdateComputers = async () => {
        try {
            await updateComputers(computerEdit)
            dispatch(computersClearEdit())
            navigate("/inventory/computadoras")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro actualizar!',
            })
        }
    }

    const handlerGetById = (id) => {
        console.log(id)
        const computer = computers.find(computer => computer.id == id)
        if (!computer) {
            navigate("/inventory/computadoras")
            return
        }
        dispatch(loadComputersEdit(computer))
    }

    const handlerRemoveComputer = async (id) => {
        try {
            const result = await Swal.fire({
                icon: 'warning',
                title: '¿Estas seguro de eliminar?',
                text: 'No podras revertir esto!',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'No, cancelar!',
                reverseButtons: true
            })
            if (result.isConfirmed) {
                await removeComputers(id)
                handlerGetAll()
                Swal.fire(
                    '¡Eliminado!',
                    'La computadora ha sido borrada.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelado',
                    'La computadora no se elimino',
                    'error'
                )
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se puede borrar, tiene perifericos asociados!',
            })
        }
    }

    return {
        computers,
        computer,
        computerEdit,
        loading,
        error,
        handlerGetAll,
        modifyNewComputers,
        saveComputers,
        modifyEditComputers,
        handlerUpdateComputers,
        handlerGetById,
        handlerRemoveComputer
    };
}

export default useComputers;