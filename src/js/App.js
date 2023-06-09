import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  //if null, if empty, any falsy JS value
  if (!localStorageTodos) {
    parsedTodos = [];
    localStorage
      .setItem('TODOS_V1', JSON.stringify(parsedTodos));
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const [searchValue, setSearchValue]
   = React.useState('');

  const [todosList, setTodosList]
   = React.useState(parsedTodos);
 
  const completedTodos = todosList.filter(todo => !!todo.completed).length;
  const totalTodos = todosList.length;

  const searchedTodos = todosList.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  function updateTodos(newTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodosList(newTodos);
  }

  function completeTodo(id) {
      const newTodos = [...todosList];
      const todoIndex = newTodos.findIndex(todo => todo.id === id);
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      updateTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = [...todosList];
    updateTodos(newTodos.filter(todo => todo.id !== id));
  }

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

      <CreateTodoButton addTodo={setTodosList}/>
    </>
  );
}

export default App;
