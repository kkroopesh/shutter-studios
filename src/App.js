import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav-bar";
import ContactUs from "./pages/contact-us";
import Home from "./pages/home";
import Services from "./pages/services";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
