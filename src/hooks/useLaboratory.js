import { useDispatch, useSelector } from "react-redux";
import { getAllLaboratory } from "../services/laboratoryServices";
import { laboratoryError, laboratoryLoading, laboratorySuccess } from "../store/slices/laboratory/laboratorySlice";
import Swal from "sweetalert2";

const useLaboratory = () => {
    const { laboratories, laboratory, loading, error } = useSelector((state) => state.laboratory);
    const dispach = useDispatch();

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

    return {
        laboratories,
        laboratory,
        loading,
        error,
        handlerGetAll
    };
};

export default useLaboratory;