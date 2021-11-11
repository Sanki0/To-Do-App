import React from 'react'
import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoSearch } from './ToDoSearch';
import { CreateToDoButton } from './CreateToDoButton';
//import './App.css';


const ToDos = [
  {text:'Cortar cebolla', completed:true},
  {text:'Jugar Valorant', completed:false},
  {text:'Terminar React', completed:false},
];

function App() {
  return (
    <>
      <ToDoCounter/>
      <ToDoSearch/>

       <ToDoList>
        {ToDos.map(ToDo=>(
          <ToDoItem 
            key={ToDo.text}  
            text={ToDo.text}
            completed={ToDo.completed}
            />
        ))}
      </ToDoList>

      <CreateToDoButton/>
    </>
    
  );
}

export default App;
