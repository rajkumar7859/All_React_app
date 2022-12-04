import { createRoot } from "react-dom/client";

import App from "./App";
import { ThemeContext } from "./Context/ThemeContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeContext>
    <App />
  </ThemeContext>
);
