import React from 'react'


function formulario() {

    function addTask(e ,task0){
        e.preventDefault()
        console.log('Tarefa:', task0)
    }

  return (
    <form onSubmit={ addTask }>
        <div>
            <span>
                <input type='text' placeholder='Informe sua tarefa'></input>
            </span>
            <span>
                <input type='submit' value='add'></input>
            </span>
        </div>
    </form>
  )
}

export default formulario