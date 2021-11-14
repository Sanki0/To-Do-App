import React from 'react'
import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoSearch } from './ToDoSearch';
import { CreateToDoButton } from './CreateToDoButton';
//import './App.css';


const defaultToDos = [
  {text:'Cortar cebolla', completed:true},
  {text:'Jugar Valorant', completed:false},
  {text:'Terminar React', completed:false},
];

function App() {
  const [ToDos,setTodos]=React.useState(defaultToDos);
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
    setTodos(newToDos);
  }

  const deleteToDo=(text)=>{
    const ToDoIndex=ToDos.findIndex(ToDo=>ToDo.text===text);
    const newToDos=[...ToDos];
    newToDos.splice(ToDoIndex,1);
    setTodos(newToDos);
  }

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

export default App;
