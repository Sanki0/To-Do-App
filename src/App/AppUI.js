import React from 'react';
import { ToDoCounter } from '../ToDoCounter/ToDoCounter';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoList } from '../ToDolist/ToDoList';
import { ToDoSearch } from '../ToDoSearch/ToDoSearch';
import { CreateToDoButton } from '../CreateToDoButton/CreateToDoButton';

function AppUI({
  totalToDos,
  completedToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDo,
  deleteToDo,
}){
  return (
    <>
      <ToDoCounter
        total={totalToDos}
        completed={completedToDos}
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

       <ToDoList>
        {searchedToDos.map(ToDo=>(
          <ToDoItem 
            key={ToDo.text}  
            text={ToDo.text}
            completed={ToDo.completed}
            onComplete={()=> completeToDo(ToDo.text)}
            onDelete={()=> deleteToDo(ToDo.text)}
            />
        ))}
      </ToDoList>

      <CreateToDoButton/>
    </>

  );
}

export {AppUI};