import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";
import Payment from "./components/Payment";

// PAGES
import Home from "./pages/Home";

import Login from "./pages/Login";
import History from "./pages/History";
import Contact from "./pages/Contact";

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
        <Route exact path="/history">
          <History />
        </Route>
        <Route path="/history/:id">
          <Payment />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
