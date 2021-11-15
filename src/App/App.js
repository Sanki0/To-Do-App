import React from 'react';
import {ToDoProvider} from '../ToDoContext/ToDoContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;
