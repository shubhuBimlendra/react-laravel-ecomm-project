import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import AdminPrivateRoute from "./AdminPrivateRoute.js";
import Page403 from "./components/errors/Page403.js";
import Page404 from "./components/errors/Page404.js";
import PublicRoute from "./PublicRoute.js";

//to generate csrf tokens
import axios from "axios";
axios.defaults.withCredentials = true;

//bearer tokken for logout
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

//base url
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <AdminPrivateRoute path="/admin" name="Admin" />
          <PublicRoute path="/" name="Home" />
          <Route path="/403" component={Page403} />
          <Route path="/404" component={Page404} />
          <Route path="/login">
            {localStorage.getItem("auth_token") ? (
              <Redirect to="/" />
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/register">
            {localStorage.getItem("auth_token") ? (
              <Redirect to="/" />
            ) : (
              <Register />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
