import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError.js';
import { EmptyTodos } from './EmptyTodos.js';
import { TodoProvider } from './TodoContext';
import { TodoContext } from './TodoContext';

function App() {

  return (
    <>
      <TodoProvider>
        <TodoCounter />

        <TodoSearch />

        <TodoContext.Consumer>
          {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo
          }) => (
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
          )}
        </TodoContext.Consumer>

        <CreateTodoButton />
      </TodoProvider>
    </>
  );
}

export default App;
