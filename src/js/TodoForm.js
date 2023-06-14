import React from 'react'
import '../css/TodoForm.css'
import { TodoContext } from './TodoContext';

function TodoForm () {

  const {setOpenModal, addNewTodo, emptyTodo}
        = React.useContext(TodoContext);

  //Estado LOCAL - No global
  const [newtodoValue, setNewTodoValue]
    = React.useState('');

  const submit = (event) => {
    event.preventDefault();
    addNewTodo(newtodoValue)
  };

  const onCancel = () => {setOpenModal(false)};

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const checkKey = (event) => {
    if (event.key === 'Enter') {
        submit(event);
    }
  };

  return (
    <form className='TodoForm'
        //cancela refresh por defecto
        onSubmit={submit}
    >
        <label className='TodoForm-label'>Escribe un TODO</label>
        <textarea className='TodoForm-textarea' 
            placeholder='Picar aji'
            value={newtodoValue}
            onChange={onChange}
            onKeyDown={checkKey}
        />
        {emptyTodo && <p>TODO vacio!</p>}
        <div className='TodoForm-buttonContainer'>
            <button className='TodoForm-button TodoForm-button--cancel'
                type='button'
                onClick={onCancel}
            >Cancelar</button>
            
            <button className='TodoForm-button TodoForm-button--add'
                type='submit'
            >Agregar</button>
        </div>

    </form>
  )
}

export {TodoForm};