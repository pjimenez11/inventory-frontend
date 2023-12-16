import { HiMiniXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../../auth/hooks/useAuth";
import useNavigated from "../../hooks/useNavigated";

export default function SidebarDestok() {
  const { login } = useAuth();
  const { navigateOptions, handleNavigate, iconMap } = useNavigated();
  const navigateRole = navigateOptions[login.role];

  const path = window.location.pathname;

  useEffect(() => {
    handleNavigate(path);
  }, []);

  useEffect(() => {
    handleNavigate(path);
  }, [path]);

  return (
    <aside
      className={`fixed h-full w-64 z-50 px-4 py-8 overflow-y-auto bg-oxford-blue-900 transition-all`}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img className="w-auto h-14 sm:h-16" src="https://correoinstitucionalonline.info/wp-content/uploads/2021/10/logo-uta.png" alt="logo" />
          <h1 className="font-semibold text-white">Inventory</h1>
        </a>
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {navigateRole.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-2 mt-5 font-bold transition-colors duration-300 transform rounded-md ${
                  item.current ? "bg-rhino-900  text-blue-500 " : " text-gray-400"
                } `}
                onClick={() => {
                  handleNavigate(item.href);
                }}
              >
                <IconComponent className="w-6 h-6" />
                <span className="mx-4 ">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
