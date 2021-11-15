import React from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { ToDoCounter } from '../ToDoCounter/ToDoCounter';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoList } from '../ToDolist/ToDoList';
import { ToDoSearch } from '../ToDoSearch/ToDoSearch';
import { CreateToDoButton } from '../CreateToDoButton/CreateToDoButton';
import { Modal } from '../Modal/Modal'
import { ToDoForm } from '../ToDoForm/ToDoForm';

function AppUI(){
  const {
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal
  }=React.useContext(ToDoContext);

  return (
    <>
      <ToDoCounter/>
      <ToDoSearch/>

      <ToDoList>
        {loading && <p>Estamos cargando</p>}
        {error && <p>Estamos cargando</p>}
        {(!loading && !searchedToDos.length) && <p>Crea tu primer todo</p>}
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

      {!!openModal &&(
        <Modal>
          <ToDoForm/>
        </Modal>
      )}

      <CreateToDoButton
        setOpenModal={setOpenModal}
      />
    </>

  );
}

export {AppUI};