import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventTop from "./components/EventTop";
import Login from "./Login";
import Auth from "./components/Auth";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Auth>
            <Switch>
              <EventTop />
            </Switch>
          </Auth>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
