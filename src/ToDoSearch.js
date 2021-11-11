import React from 'react';
import './ToDoSearch.css';

function ToDoSearch() {
  return (
    <div className="ToDoSearch-container">
      <input className="ToDoSearch" placeholder="Enter your tasks" />
    </div>
    
  );
}

export { ToDoSearch };