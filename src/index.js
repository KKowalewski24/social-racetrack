import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import AuthContextProvider from "./util/AuthContextProvider";
import "./index.css";
import App from "./main/App";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
