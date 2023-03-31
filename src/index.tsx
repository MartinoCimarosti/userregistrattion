import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { todsTheme } from "../theme";

import { ChakraProvider } from "@chakra-ui/react";
import { Multistep } from "./Multistep";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={todsTheme}>
      <Multistep />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
