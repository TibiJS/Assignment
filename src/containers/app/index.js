import React from "react";
import { Route } from "react-router-dom";
import Home from "../home";
import New from "./new";

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={New} />
    </main>
  </div>
);

export default App;
