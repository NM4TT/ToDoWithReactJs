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

  const [searchValue, setSearchValue]
   = React.useState('');

  const [todosList, setTodosList]
   = React.useState(defaultTodos);
 
  const completedTodos = todosList.filter(todo => !!todo.completed).length;
  const totalTodos = todosList.length;

  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />

      <TodoSearch 
        searchState={searchValue} 
        setSearchState={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton addTodo={setTodosList}/>
    </>
  );
}

export default App;
