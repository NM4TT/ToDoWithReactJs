import React from 'react'
import '../css/CreateTodoButton.css'
// import { TodoContext } from './TodoContext';

function CreateTodoButton() {

  // const {
  //   saveTodos
  // } = React.useContext(TodoContext);

  return (
    <button className="CreateTodoButton"
     onClick={(event) => console.log(event.target)} >
      +
    </button>
  );
}

export { CreateTodoButton };