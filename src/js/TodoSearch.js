import React from 'react'
import '../css/TodoSearch.css'
import { TodoContext } from './TodoContext';

function TodoSearch() {

  const {
    searchState,
    setSearchState
  } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchState}
      onChange={
        (event) => setSearchState(event.target.value)
      }
    />
  );
}

export { TodoSearch };