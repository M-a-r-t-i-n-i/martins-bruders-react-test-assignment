import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

// GraphQL
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { client } from "./queries";

//Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        {" "}
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
