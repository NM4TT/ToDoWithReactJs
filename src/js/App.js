import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError.js';
import { EmptyTodos } from './EmptyTodos.js';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { TodoContext } from './TodoContext';

function App() {
  
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />

      <TodoSearch />

        <TodoList>
          {loading && <TodosLoading/>}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0)
            && <EmptyTodos/>}

          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.id} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </TodoList>

        <CreateTodoButton onClick = {setOpenModal}/>

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

    </>
  );
}

export default App;
