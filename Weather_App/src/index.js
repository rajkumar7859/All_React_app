import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import WeatherProvider from "./Context/WeatherProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
