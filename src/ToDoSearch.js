import React from 'react';
import './ToDoSearch.css';

function ToDoSearch() {
  const [searchValue,setSearchValue]=React.useState('');

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
      <p>
        {searchValue}
      </p>
    </div>
    </>
  );
}

export { ToDoSearch };