import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import Payment from "./Routes/Payment";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} component={Home} exact/>
      <Route path={"/payment"} component={Payment}/>
      <Redirect from={"*"} to={"/"}/>
    </Switch>
  </BrowserRouter>
);

export default App;