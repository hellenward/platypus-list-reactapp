import React from "react";
import "./App.css";
import Menu from "./components/menu.jsx";
import InputBox from "./components/inputbox.jsx";
import ToDoList from "./components/todolist.jsx";
import CompletedList from "./components/completedlist.jsx";
import Header from "./components/header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <InputBox />
      <ToDoList />
      <CompletedList />
    </div>
  );
}

export default App;
