import React from 'react';

const Form = ({setTextInput, todos, setTodo,textInput, setStatus})=>{

    // javascript code and functions //
    const textInputHandler = (e) =>{
        console.log(e.target.value)
        setTextInput(e.target.value);
        
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        setTodo([
            ...todos, {text: textInput, completed:false, id: Math.random() * 1000}
        ]);
        setTextInput('');
    };
    const statusHandler = (e) =>{
      setStatus(e.target.value);

    }
    return(
        
    <form>
           
      <input value={textInput} onChange ={textInputHandler} type="text" className="todo-input"/>
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      
    </form>
                
            
  
    );
};

export default Form;