import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { assetsClear, assetsClearEdit, assetsError, assetsLoading, assetsNew, assetsSuccess, changeAssetsEdit, loadAssetsEdit } from "../store/slices/assets/assetsSlice";
import { createAssets, getAllAssets, removeAssets, updateAssets } from "../services/assetsServices";
import Swal from "sweetalert2";

const useAssets = () => {
    const { assets, asset, assetEdit, loading, error } = useSelector(state => state.assets);
    const dispach = useDispatch();
    const navigate = useNavigate();

    const handlerGetAll = async () => {
        try {
            dispach(assetsLoading())
            const response = await getAllAssets();
            dispach(assetsSuccess(response.data))
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            dispach(assetsError(error))
        }
    };

    const modifyNewAssets = (values) => {
        dispach(assetsNew(values))
    }

    const saveAssets = async () => {
        try {
            await createAssets(asset)
            dispach(assetsClear())
            navigate("/inventory/bienes")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const modifyEditAssets = (values) => {
        dispach(changeAssetsEdit(values))
    }

    const handlerUpdateAssets = async () => {
        try {
            await updateAssets(assetEdit)
            dispach(assetsClearEdit())
            navigate("/inventory/bienes")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const handlerDeleteAssets = async (id) => {
        try {
            await deleteAssets(id)
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
        const asset = assets.find(asset => asset.id == id)
        if (!asset) {
            navigate("/inventory/bienes")
            return
        }
        dispach(loadAssetsEdit(asset))
    }

    const handlerRemoveAssets = async (id) => {
        try {
            await removeAssets(id)
            handlerGetAll()
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se puede borrar, el bien se encuentra referenciado!',
            })
        }
    }


    return {
        assets,
        asset,
        assetEdit,
        loading,
        error,
        handlerGetAll,
        modifyNewAssets,
        saveAssets,
        modifyEditAssets,
        handlerUpdateAssets,
        handlerDeleteAssets,
        handlerGetById,
        handlerRemoveAssets
    }
};

export default useAssets;