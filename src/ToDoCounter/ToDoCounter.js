import React from "react";
import { ToDoContext } from "../../ToDoContext/ToDoContext";
import './ToDoCounter.css';

function ToDoCounter(){
  const {totalToDos,completedToDos}=React.useContext(ToDoContext);
  return(
    <>
      <h2 className="ToDoCounter">Has completado {completedToDos} de {totalToDos} actividades en tu lista</h2>
    </>
  );
}

export {ToDoCounter}