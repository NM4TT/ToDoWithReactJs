import React from "react";
import {useLocalStorage} from "./useLocalStorage"

const TodoContext = React.createContext();

function TodoProvider({children}) {
    
   const [searchValue, setSearchValue]
    = React.useState('');
 
   const {item: todosList, saveItem: saveTodos,
     loading, error} = useLocalStorage('TODOS_V1', []);
  
   const [openModal, setOpenModal]
    = React.useState(false);
   
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

   function addNewTodo() {
      setOpenModal(!openModal);
   }
    
    return (
        <TodoContext.Provider
            value={{
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                todosList,
                saveTodos,
                openModal,
                setOpenModal,
                loading,
                addNewTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};