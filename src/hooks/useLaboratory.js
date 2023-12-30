import { useSelector } from "react-redux";

const useLaboratory = () => {
    const { laboratories, laboratory, loading, error } = useSelector((state) => state.laboratory);

    return {
        laboratories,
        laboratory,
        loading,
        error,
    };
};

export default useLaboratory;