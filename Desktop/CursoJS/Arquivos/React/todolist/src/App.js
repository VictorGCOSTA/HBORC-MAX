import './App.css';
import React from 'react'
import Component0 from './components/component0';
import Formulario from './components/formulario';
import Componente2 from './components/componente2';
import OnClickDone from './components/onClickDone';

function App() {

  //const task = 'Tomar banho', date = '20/12/2001'
  const task = 'Dar banho no peixe', date = '00/00/0000'
  let task2 = ''

  return (
    <div>
      <Component0 tarefa={ task } data={ date }/>
      <Formulario task0={ task } task1={ task }/>
      <br/>
      <Componente2 task1={ task }/>
      <br/>
      <OnClickDone/>
    </div>
  );

}

export default App;
