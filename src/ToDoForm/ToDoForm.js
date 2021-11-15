import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import './ToDoForm.css'

function ToDoForm(){
  const [newToDoValue,setNewToDoValue]=React.useState('');

  const{
    addToDo,
    setOpenModal,
  }=React.useContext(ToDoContext);

  const onChange=(event)=> {
    setNewToDoValue (event.target.value);
  }

  const onCancel=(event)=> {
    setOpenModal(false);
  }

  const onSubmit =(event)=>{
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Escribe tu tarea
      </label>
      <textarea
        value={newToDoValue}
        onChange={onChange}
        placeholder='Cortar'
      />
      <div className="ToDoForm-buttonContainer">
        <button
          type='button'
          onClick={onCancel}
          className="ToDoForm-button ToDoForm-button--cancel"
        >
          Cancelar
        </button>
        <button
          type='submit'
          className="ToDoForm-button ToDoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}
export {ToDoForm};