import logo from './logo.svg';
import './App.css';
import {TodoList} from './components/TodoList'
import {NewTodo} from './components/NewTodo'
import { useState } from 'react';

function App() {

  const [todos, setTodos]= useState([])
  
  const checkTodo =(id) => {
    setTodos(prev => {

      const newArray = [...prev].map(todo =>{
        if(todo.id !== id) return todo;
        return{
          ...todo,
          isChecked: !todo.isChecked,
        };
      });
      
      return newArray;
    }

      
      )}
  
  
  return (
    <div className="App">
    <h1>Lista de tarefas</h1>
     <NewTodo setTodos={setTodos}/>
      <TodoList todos={todos} checkTodo={checkTodo}
      />
    </div>
  );
}

export default App;
