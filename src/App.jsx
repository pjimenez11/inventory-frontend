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
      </Provider>
    </>
  );
}

export default App;
