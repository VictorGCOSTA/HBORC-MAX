import React, { useState } from 'react'

function onClickDone() {
  
    const [nome, setNome] = useState()
    const [task, setTask] = useState()
    
    const doneTask = (e) => {
        e.preventDefault()
        setTask(`${nome} (FEITO)`)
    }



    return (
    <div >
        <input type='text' placeholder='Informe sua  tarefa' onChange={(e) => setNome(e.target.value)}></input>
        <button type='submit' value='enviar' onClick={doneTask}>ADD</button>
        <h2>{task}</h2>
    </div>
    
  )
}

export default onClickDone