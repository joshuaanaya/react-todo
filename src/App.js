import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"; 
import ToDoList from './components/ToDoList';



function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos ] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtereTodos, setFilteredTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>Josh's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
    
  );
}

export default App;
