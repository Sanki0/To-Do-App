import React from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import './ToDoSearch.css';

function ToDoSearch() {
  const {searchValue,setSearchValue}=React.useContext(ToDoContext);

  const onSearchValueChange= (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <>
    <div className="ToDoSearch-container">
      <input 
        className="ToDoSearch" 
        placeholder="Enter your tasks"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
    </>
  );
}

export { ToDoSearch };