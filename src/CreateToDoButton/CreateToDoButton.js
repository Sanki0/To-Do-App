import React from 'react';
import './CreateToDoButton.css';

function CreateToDoButton(props) {
  const onClickButton = (msg)=>{
    alert(msg);
  }


  return (
    <>
      <button 
        className="CreateToDoButton"
        onClick={()=>onClickButton('aqui sale el mensaje enviado')}
      >
        +
      </button>
    </>
  );
}

export { CreateToDoButton };