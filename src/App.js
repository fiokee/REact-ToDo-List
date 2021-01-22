import React,{useState} from 'react';
import './App.css';
import'./components/form';
import Form from './components/form';
import TodoList from'./components/todoList';

function App() {
  const [textInput, setTextInput] = useState('');
  const[todos, setTodo]= useState([]);
  const [status, setStatus]= useState('all');
  const [filterTodo, setFilterTodo]= useState([]);
  return (
    <div className="App">
    <header>
      <h1>Todo List App</h1>
        </header>
        <Form textInput={textInput} todos={todos} 
        setTodo={setTodo} setTextInput={setTextInput} setStatus={setStatus}/>
        <TodoList setTodo={setTodo} todos={todos}/>
    </div> 
  );
}

export default App;
