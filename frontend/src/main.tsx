import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/userContextProvider";

import App from "./App";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <UserContextProvider>
          <App />
        </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
