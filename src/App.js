import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import Home from "./components/frontend/Home";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";

//to generate csrf tokens
import axios from "axios";
axios.defaults.withCredentials = true;

//base url
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route
            path="/admin"
            name="Admin"
            render={(props) => <MasterLayout {...props} />}
            component={MasterLayout}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
