import { StrictMode } from "react";
import { Provider } from "./components/ui/provider";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
