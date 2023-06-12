import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function useLocalStorage(itemName, initialValue){

  const localStorageItem  = localStorage.getItem(itemName);
  let parsedItem;

  //if null, if empty, any falsy JS value
  if (!localStorageItem) {
    parsedItem = initialValue;
    localStorage
      .setItem(itemName, JSON.stringify(initialValue));
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  function saveItem(newItem) {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return [item,saveItem]; //return as array
}

function App() {
  
  const [searchValue, setSearchValue]
   = React.useState('');

  const [todosList, saveTodos]
   = useLocalStorage('TODOS_V1', []);
 
  const completedTodos = todosList.filter(todo => !!todo.completed).length;
  const totalTodos = todosList.length;

  const searchedTodos = todosList.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  function completeTodo(id) {
      const newTodos = [...todosList];
      const todoIndex = newTodos.findIndex(todo => todo.id === id);
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = [...todosList];
    saveTodos(newTodos.filter(todo => todo.id !== id));
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

      <CreateTodoButton addTodo={saveTodos}/>
    </>
  );
}

export default App;
