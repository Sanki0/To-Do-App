import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const {
    item:ToDos,
    saveItem:saveToDos,
    loading,
    error
  }=useLocalStorage('TODOS_V1', []);
  const [searchValue,setSearchValue]=React.useState('');

  const completedToDos=ToDos.filter(ToDo=>!!ToDo.completed).length;
  const totalToDos=ToDos.length;

  let searchedToDos=[];

  if(!searchValue.length>0){
    searchedToDos=ToDos;
  }
  else{
    searchedToDos=ToDos.filter(ToDo=>{
      const ToDoText=ToDo.text.toLowerCase();
      const searchText=searchValue.toLowerCase();
      return ToDoText.includes(searchText);
    })
  }

  const completeToDo=(text)=>{
    const ToDoIndex=ToDos.findIndex(ToDo=>ToDo.text===text);
    const newToDos=[...ToDos];
    newToDos[ToDoIndex].completed=true;
    saveToDos(newToDos);
  }

  const deleteToDo=(text)=>{
    const ToDoIndex=ToDos.findIndex(ToDo=>ToDo.text===text);
    const newToDos=[...ToDos];
    newToDos.splice(ToDoIndex,1);
    saveToDos(newToDos);
  }

  return (
    <ToDoContext.Provider value={{
      
      loading,
      error,
      totalToDos,
      completedToDos,
      searchValue,
      setSearchValue,
      searchedToDos,
      completeToDo,
      deleteToDo,
    }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };