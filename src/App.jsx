import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="flex">
          <AppRoutes />
        </div>
        <button id="myCustomTrigger" className="z-50 fixed  top-0 right-1/2 text-white bg-gray-600 p-2 rounded-b-lg" >Sugerencias</button>
      </Provider>
    </>
  );
}

export default App;
