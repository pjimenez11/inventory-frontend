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
                text: 'No se logro obtener los bienes!',
            })
            dispach(assetsError(error))
        }
    };

    const modifyNewAssets = (values) => {
        dispach(assetsNew(values))
    }

    const saveAssets = async () => {
        try {
            //eliminar el id del laboratorio si es vacio
            const createAsset = { ...asset };
            if (createAsset.laboratory_id === "") {
                delete createAsset.laboratory_id;
            }
            console.log(createAsset)
            await createAssets(createAsset)
            dispach(assetsClear())
            navigate("/inventory/bienes")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro guardar!',
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
                text: 'No se logro actualizar!',
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
                text: 'No se logro eliminar!',
            })
        }
    }

    const handlerGetById = (id) => {
        const asset = assets.find(asset => asset.id == id)
        if (!asset) {
            navigate("/inventory/bienes")
            return
        }
        dispach(loadAssetsEdit({ 
            id: asset.id, 
            name: asset.name, 
            description: asset.description, 
            stock: asset.stock,
            amount: asset.amount,
            laboratory_id: asset.laboratory?.id,
            computer_id: asset.computer?.id,
            custodian_id: asset.custodian?.id, }))
    }

    const handlerRemoveAssets = async (id) => {
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
                await removeAssets(id)
                handlerGetAll()
                Swal.fire(
                    'Eliminado!',
                    'El bien ha sido eliminado.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelado',
                    'El bien no se elimino',
                    'error'
                )
            }
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