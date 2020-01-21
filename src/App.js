import React from "react";
import "./App.css";
import Menu from "./components/menu.jsx";
import InputBox from "./components/inputbox.jsx";
import ToDoList from "./components/todolist.jsx";
import CompletedList from "./components/completedlist.jsx";
import Header from "./components/header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import Sharebutton from "./components/sharebutton.jsx";

const data = require("./data.json");
let toDoArray = data.filter(item => !item.Completed);
let completedArray = data.filter(item => item.Completed);

console.log(toDoArray, completedArray);

function App() {
  return (
    <Container>
      <Row>
        <Col xs={{ offset: 2 }}>
          <Header />
        </Col>
        <Col xs>
          <Sharebutton />
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 2 }}>
          <Menu />
        </Col>
        <Col xs>
          <InputBox />
          <ToDoList toDos={toDoArray} />
          {/*      <CompletedList toDos={completedArray} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
