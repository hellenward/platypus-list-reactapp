import React from "react";
import "./App.css";
import Menu from "./components/menu.jsx";
import InputBox from "./components/inputbox.jsx";
import ToDoList from "./components/todolist.jsx";
import CompletedList from "./components/completedlist.jsx";

function App() {
  return (
    <div className="App">
      <Menu />
      <InputBox />
      <ToDoList />
      <CompletedList />
    </div>
  );
}

export default App;
