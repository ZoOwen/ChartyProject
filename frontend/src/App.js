import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";

import Login from "./pages/Login";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
