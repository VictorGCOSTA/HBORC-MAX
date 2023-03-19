import React, { useState } from 'react'

function componente2({task1}) {

    const [name, setName] = useState()

    const [tela, setTela] = useState()

    const doneTask = (e) => {
        e.preventDefault()
        console.log(name)
        setTela(`${name} FEITO`)
    } 



    
    
  return (
    <div>
        <form onSubmit={ doneTask } >
                <label>Tarefa:<input type='text' placeholder='Informe sua tarefa' onChange={(e) => setName(e.target.value)}></input></label>
            <button type='submit' value='Enviar'>Enviar</button>
            <p>{tela}</p>
        </form>
    </div>
  )
}

export default componente2