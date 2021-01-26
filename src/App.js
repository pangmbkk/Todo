import React from "react";
import Home from "./Home"
import History from "./History"
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
  
        </Switch>
    </Router>
    </div>
  );
}

export default App;
