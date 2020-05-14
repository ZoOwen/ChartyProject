import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";

import HistoryDesc from "./components/HistoryDesc";
// PAGES
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import History from "./pages/History";
import About from "./pages/about";
import Register from "./pages/register";

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
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>

        <Route path="/history/:id">
          <HistoryDesc />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
