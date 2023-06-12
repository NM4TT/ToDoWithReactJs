import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';

function App() {
  
  const [searchValue, setSearchValue]
   = React.useState('');

  const {item: todosList, saveItem: saveTodos,
    loading, error} = useLocalStorage('TODOS_V1', []);
 
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
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Desesperacion...</p>}
        {(!loading && searchedTodos.length === 0)
          && <p>Crea tu primer TODO</p>}

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
