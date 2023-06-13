import React from 'react'
import '../css/CreateTodoButton.css'
// import { TodoContext } from './TodoContext';

function CreateTodoButton({onAdd}) {

  return (
    <button className="CreateTodoButton"
     onClick={onAdd} >
      +
    </button>
  );
}

export { CreateTodoButton };