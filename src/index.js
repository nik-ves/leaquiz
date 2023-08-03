import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import ChampionContextProvider from "./context/champions-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChampionContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChampionContextProvider>
);
