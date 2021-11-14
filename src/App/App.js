import React from 'react';
import { AppUI } from './AppUI';


// const defaultToDos = [
//   {text:'Cortar cebolla', completed:true},
//   {text:'Jugar Valorant', completed:false},
//   {text:'Terminar React', completed:false},
// ];

function App() {
  const localStorageToDos=localStorage.getItem('ToDos_v1');

  let parsedToDos;

  if(!localStorageToDos){
    localStorage.setItem('ToDos_v1',JSON.stringify([]));
    parsedToDos=[];
  }
  else{
    parsedToDos=JSON.parse(localStorageToDos);
  }

  const [ToDos,setToDos]=React.useState(parsedToDos);
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

  const saveToDos=(newToDos)=>{
    const stringifiedToDos=JSON.stringify(newToDos);
    localStorage.setItem('ToDos_V1',stringifiedToDos);
    setToDos(newToDos);
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
    <AppUI
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
