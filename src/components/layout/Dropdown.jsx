import React from "react";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
} from "tw-elements-react";
import useAuth from "../../auth/hooks/useAuth";

export default function Dropdown() {
  const { login, handlerLogout } = useAuth();
  return (
    <TEDropdown className="flex justify-center">
      <TEDropdownToggle className="flex items-center rounded px-6 py-1 text-sm ">
        <img
          className="object-cover mx-2 rounded-full h-6 w-6"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
        <span className="mx-2 font-medium text-white">
          {login.user?.first_name} {login.user?.last_name}
        </span>
      </TEDropdownToggle>
      <TEDropdownMenu className="bg-oxford-blue-700 ">
        <TEDropdownItem className="bg-oxford-blue-700">
          <button
            onClick={handlerLogout}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-oxford-blue-700 
            px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-200
            hover:bg-oxford-blue-800 active:text-neutral-100 active:bg-oxford-blue-800 
            focus:bg-oxford-blue-800 focus:text-neutral-100 focus:outline-none active:no-underline"
          >
            Cerrar sesión
          </button>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
}
