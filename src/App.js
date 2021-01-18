import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form"; 
import ToDoList from './components/ToDoList';



function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos ] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run at start of app 
  useEffect(() => {
    getLocalTodos();
  }, [])
  //useEffect to update Completed filtere
  useEffect(() => {
    //Filtere Completed, Uncompleted, and All
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.complete === true));
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo=> todo.complete === false));
        break
        default:
        setFilteredTodos(todos);
    }
  }
    filterHandler();
    savelocalTodos();
  },[todos, status]);
  
  //Save to local
  const savelocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Josh's Todo List</h1>
      </header>
      <Form inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      setStatus={setStatus}
      filteredTodos={filteredTodos}/>
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
    
  );
}

export default App;
