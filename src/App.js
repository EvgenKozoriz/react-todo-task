import React from "react";
import TodoList from "./components/todoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="content">
      <BrowserRouter basename="/react-todo-task">
        <NavBar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
