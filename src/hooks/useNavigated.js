import { useDispatch, useSelector } from "react-redux"
import { currentNavigate } from "../store/slices/navigate/navigateSlice";
import useAuth from "../auth/hooks/useAuth";

import { GoHome } from "react-icons/go";
import { HiOutlineQueueList } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleclassroom } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const useNavigated = () => {

    const { navigateOptions } = useSelector((state) => state.navigate);
    const dispach = useDispatch()

    const { login } = useAuth();
    
    const rolesNavigate = (roles) => {
        const custodian = roles.some(role => role.name === "CUSTODIAN")
        const technician = roles.some(role => role.name === "TECHNICIAN")
        if (technician && custodian) return "TECHNICIAN_CUSTODIAN"
        if (technician) return "TECHNICIAN"
        if (custodian) return "CUSTODIAN"
    }

    const handleNavigate = (href) => {
        dispach(currentNavigate({ role: rolesNavigate(login.user.roles), href }))
    }

    

    const iconMap = {
        "GoHome": GoHome,
        "RxDashboard": RxDashboard,
        "HiOutlineQueueList": HiOutlineQueueList,
        "SiGoogleclassroom": SiGoogleclassroom,
        "FaComputer": FaComputer,
        "MdOutlineSettingsSuggest": MdOutlineSettingsSuggest,
        "FaRegUser": FaRegUser
    };

    return { navigateOptions, handleNavigate, iconMap, rolesNavigate }
}

export default useNavigated