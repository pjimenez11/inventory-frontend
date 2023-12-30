import { useDispatch, useSelector } from "react-redux";
import { createLaboratory, getAllLaboratory, updateLaboratory } from "../services/laboratoryServices";
import { changeLaboratoryEdit, laboratoryClear, laboratoryClearEdit, laboratoryError, laboratoryLoading, laboratoryNew, laboratorySuccess, loadLaboratoryEdit } from "../store/slices/laboratory/laboratorySlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useLaboratory = () => {
    const { laboratories, laboratory, laboratoryEdit, loading, error } = useSelector((state) => state.laboratory);
    const dispach = useDispatch();
    const navigate = useNavigate();

    const handlerGetAll = async () => {
        try {
            dispach(laboratoryLoading())
            const response = await getAllLaboratory();
            dispach(laboratorySuccess(response.data))
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            dispach(laboratoryError(error))
        }
    };

    const modifyNewLaboratory = (values) => {
        dispach(laboratoryNew(values))
    }

    const saveLaboratory = async () => {
        try {
            await createLaboratory(laboratory)
            dispach(laboratoryClear())
            navigate("/inventory/laboratorios")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const modifyEditLaboratory = (values) => {
        dispach(changeLaboratoryEdit(values))
    }

    const handlerUpdateLaboratory = async () => {
        try {
            await updateLaboratory(laboratoryEdit)
            dispach(laboratoryClearEdit())
            navigate("/inventory/laboratorios")
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
        const laboratory = laboratories.find(laboratory => laboratory.id == id)
        console.log(laboratory)
        if (!laboratory) {
            navigate("/inventory/laboratorios")
            return
        }
        dispach(loadLaboratoryEdit(laboratory))
    }

    return {
        laboratories,
        laboratory,
        laboratoryEdit,
        loading,
        error,
        handlerGetAll,
        modifyNewLaboratory,
        saveLaboratory,
        modifyEditLaboratory,
        handlerUpdateLaboratory,
        handlerGetById
    };
};

export default useLaboratory;