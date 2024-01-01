

const Users = () => {
    return (
        <div>
            <div className="flex flex-row justify-between items-center "> 
                <h1 className="flex text-oxford-blue-50 text-xl">Sugerencias</h1>
                <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-400 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" onClick={handleShowSuggestions}>Nueva sugerencia</button>
            </div>
        </div>
    );
};

export default Users;