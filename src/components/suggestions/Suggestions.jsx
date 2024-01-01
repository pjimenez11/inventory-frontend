import { useEffect, useState } from "react";

const Suggestions = () => {

    const [showSuggestions, setShowSuggestions] = useState(false);

    function handleShowSuggestions() {
        setShowSuggestions(!showSuggestions);
    }



    return (
        <div className="flex flex-col w-full text-oxford-blue-50">
            <div className="w-full">
                <h1>Sugerencias anteriores</h1>
            </div>
           <div className="w-full">
                <div className="flex flex-row justify-between items-center "> 
                    <h1 className="flex text-oxford-blue-50 text-xl">Sugerencias</h1>
                    <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-400 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" onClick={handleShowSuggestions}>Nueva sugerencia</button>
                </div>
               {
                showSuggestions === true && 
                <div className="flex flex-col  items-center w-full">
                    <form className="flex flex-col w-full px-6"> 
                        <div className="grid grid-cols-1 gap-6 mt-4 ">
                            <div>
                                <label className="text-white dark:text-gray-200 text-lg" htmlFor="product">Producto</label>
                                <input id="product" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200 text-lg" htmlFor="laboratory">Laboratorio</label>
                                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200 text-lg" htmlFor="custodian">Custodio</label>
                                <input id="custodian" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200 text-lg" htmlFor="description">Descripción</label>
                                <textarea name="" id="" cols="30" rows="10" className="w-full rounded-sm"></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Enviar</button>
                        </div>
                    </form>
                </div>
               }
           </div>
        </div>
    );
};

export default Suggestions ; 