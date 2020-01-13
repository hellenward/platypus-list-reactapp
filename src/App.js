import React from "react";
import "./App.css";
import Menu from "./components/menu.jsx";
import InputBox from "./components/inputbox.jsx";
import ToDoList from "./components/todolist.jsx";
import CompletedList from "./components/completedlist.jsx";
import Header from "./components/header.jsx";

const data = require("./data.json");
let toDoArray = data.filter(item => !item.Completed);
let completedArray = data.filter(item => item.Completed);

console.log(toDoArray, completedArray);

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <InputBox />
      <ToDoList toDos={toDoArray} />
      {/*      <CompletedList toDos={completedArray} /> */}
    </div>
  );
}

export default App;
