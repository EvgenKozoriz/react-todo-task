import React from "react";
import TodoList from "./components/todoList";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/about" component={About} />
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
