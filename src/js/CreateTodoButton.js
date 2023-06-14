import React from 'react'
import '../css/CreateTodoButton.css'

function CreateTodoButton({onClick}) {

  return (
    <button className="CreateTodoButton"
     onClick={ () => onClick(state => !state)} >
      +
    </button>
  );
}

export { CreateTodoButton };