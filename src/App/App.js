import React from 'react';
import { AppUI } from './AppUI';


// const defaultToDos = [
//   {text:'Cortar cebolla', completed:true},
//   {text:'Jugar Valorant', completed:false},
//   {text:'Terminar React', completed:false},
// ];
function useLocalStorage(itemName, initialValue) {
  const [loading,setLoading]=React.useState(true);
  const [error,setError]=React.useState(false);
  const [item, setItem] = React.useState(initialValue);
    
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } 
        else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }
      catch(error){
        setError(error);
      }
    },1000);
  });


  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }
    catch(error){
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  const {item:ToDos,
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

  // console.log('Render (antes del use effect)');
  // React.useEffect(()=>{
  //   console.log('use effect');
  // }, [totalToDos]);
  // console.log('Render (despues del use effect)');

  return (
    <AppUI
      loading={loading}
      error={error}
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
