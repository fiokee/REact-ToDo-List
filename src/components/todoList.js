import React from 'react';
import Todo from'./todo';

const TodoList = ({todos,todo,setTodo})=>{
      return(
        <div className="todo-container">
      <ul className="todo-list">
      {todos.map(todo =>(<Todo todo={todo} setTodo={setTodo} todos={todos} key= {todo.id} text={todo.text}/>))}
      </ul>
      </div>

    );
};

export default TodoList;