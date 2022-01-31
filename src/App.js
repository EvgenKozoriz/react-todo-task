import React from 'react'
import  ReactDOM  from 'react';
import TodoList from './todoList';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import NavBar from './NavBar';

function App() {

  return(
    <div className = 'content'>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path = '/todoList'>
            <TodoList/>
          </Route>
          <Route path = '/about'>
            <About/>
          </Route>
          <Route path = '/error'>
            <div>Такой страницы не существует</div>
          </Route>
          <Redirect to = '/error'/>
        </Switch>
      </BrowserRouter>
    </div>

  )

}

export default App;
