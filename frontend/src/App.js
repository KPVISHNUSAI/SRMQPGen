// src/App.js
import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import QuestionPage from "./Pages/QuestionPage";
import UserPage from "./Pages/UserPage";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute exact path="/questions" component={QuestionPage} />
        <ProtectedRoute exact path="/users" component={UserPage} />
      </Switch>
    </div>
  );
};

export default App;
