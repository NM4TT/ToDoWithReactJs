import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {id: 1, text: 'cortar cebolla', completed: false},
  {id: 2, text: 'picar tomate', completed: true},
  {id: 3, text: 'cortar pimenton', completed: false},
  {id: 4, text: 'cortar ajo', completed: true},
  {id: 5, text: 'cortar aji', completed: true}
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
