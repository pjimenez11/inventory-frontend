

const CardSuggestions = ({ suggestions }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                suggestions.map((suggestion) => (
                    <div className="bg-oxford-blue-950 rounded-ss-3xl shadow-md p-4" key={suggestion.id}>
                        <h2 className="text-white text-2xl font-bold">{suggestion.title}</h2>
                        <p className="text-white text-base">{suggestion.description}</p>
                        <p className="text-white text-base">Estado: {suggestion.status}</p>
                    </div>
                ))
            }
        </div>
    );
};