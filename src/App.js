import React from "react";
import "./App.css";
import Menu from "./components/menu.jsx";
import InputBox from "./components/inputbox.jsx";
import ToDoItem from "./components/todoitem.jsx";

function App() {
  return (
    <div className="App">
      <Menu />
      <InputBox />
      <ToDoItem />
    </div>
  );
}

export default App;
