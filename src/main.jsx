import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRouters from "./routers/AppRouters.jsx";
import { Provider } from "react-redux";
import { CartStore } from "./store/CartStore.js";

createRoot(document.getElementById("root")).render(
  <Provider store={CartStore}>
    <AppRouters />
  </Provider>,
);
