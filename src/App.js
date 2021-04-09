import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./components/login/SignIn";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
        
          <Route path="/home">
            <Home/>
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
