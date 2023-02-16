import React from 'react'
import TodoList from './todoList';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import Error from './Error';
import NavBar from './NavBar';

function App() {

  return(
    <div className = 'content'>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path = '/' exact component={TodoList}/>
          <Route path = '/about' component={About}/>
          <Route path = '/error' component={Error}/>
          <Redirect to = '/error'/>
        </Switch>
      </BrowserRouter>
    </div>

  )

}

export default App;
