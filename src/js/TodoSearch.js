import React from 'react'
import '../css/TodoSearch.css'

function TodoSearch({searchState, setSearchState}) {

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