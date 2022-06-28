import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Browser } from "react-router-dom";
import Font from "./components/Font";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Browser>
    <ChakraProvider>
      <Font />
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </Browser>
);
