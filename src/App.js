import React from "react";
import "./App.css";
import Menu from "./components/menu.jsx";
import InputBox from "./components/inputbox.jsx";
import ToDoList from "./components/todolist.jsx";

function App() {
  return (
    <div className="App">
      <Menu />
      <InputBox />
      <ToDoList />
    </div>
  );
}

export default App;
