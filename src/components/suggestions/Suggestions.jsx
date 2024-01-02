import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Suggestions = () => {





    return (
        <section className="min-h-max min-w-max flex flex-col gap-6 items-center p-6 bg-oxford-blue-900 rounded-lg">
            <div className="flex flex-col w-full text-oxford-blue-50">
            <div className="w-full">
                <h1>Sugerencias anteriores</h1>
            </div>
           <div className="w-full">
                <div className="flex flex-row justify-between items-center "> 
                    <h1 className="flex text-oxford-blue-50 text-xl">Sugerencias</h1>
                    <NavLink to={"/inventory/sugerencias/nuevo"} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg  hover:bg-blue-500 bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >Nueva sugerencia
                    </NavLink>
                </div>
             
           </div>
        </div>
        </section>
        
    );
};

export default Suggestions ; 