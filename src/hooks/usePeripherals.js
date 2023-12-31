import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { changePeripheralsEdit, loadPeripheralsEdit, peripheralsClear, peripheralsClearEdit, peripheralsError, peripheralsLoading, peripheralsNew, peripheralsSuccess } from "../store/slices/peripherals/peripheralsSlice"
import { createPeripherals, getAllPeripherals, removePeripherals, updatePeripherals } from "../services/peripheralsServices"
import { useNavigate } from "react-router-dom"

const usePeripherals = () => {
    const { peripherals, peripheral, peripheralEdit, loading, error } = useSelector(state => state.peripherals)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerGetAll = async () => {
        try {
            dispatch(peripheralsLoading())
            const response = await getAllPeripherals()
            dispatch(peripheralsSuccess(response.data))
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            dispatch(peripheralsError(error))
        }
    }

    const modifyNewPeripherals = (values) => {
        dispatch(peripheralsNew(values))
    }

    const savePeripherals = async () => {
        try {
            await createPeripherals(peripheral)
            dispatch(peripheralsClear())
            navigate("/inventory/perifericos")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const modifyEditPeripherals = (values) => {
        dispatch(changePeripheralsEdit(values))
    }

    const handlerUpdatePeripherals = async () => {
        try {
            await updatePeripherals(peripheralEdit)
            dispatch(peripheralsClearEdit())
            navigate("/inventory/perifericos")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const handlerRemovePeripherals = async (id) => {
        try {
            await removePeripherals(id)
            handlerGetAll()
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const handlerGetById = (id) => {
        const peripheral = peripherals.find(peripheral => peripheral.id == id)
        if (!peripheral) {
            navigate("/inventory/perifericos")
            return
        }
        dispatch(loadPeripheralsEdit(peripheral))
    }

    return {
        peripherals,
        peripheral,
        peripheralEdit,
        loading,
        error,
        handlerGetAll,
        modifyNewPeripherals,
        savePeripherals,
        modifyEditPeripherals,
        handlerUpdatePeripherals,
        handlerRemovePeripherals,
        handlerGetById
    }
}

export default usePeripherals