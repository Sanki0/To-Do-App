import React from 'react';
import { AppUI } from './AppUI';


// const defaultToDos = [
//   {text:'Cortar cebolla', completed:true},
//   {text:'Jugar Valorant', completed:false},
//   {text:'Terminar React', completed:false},
// ];
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
  
  const [ToDos,setToDos]=useLocalStorage('TODOS_V1', []);
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
