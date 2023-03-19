import React from 'react'

function componente1events({ par1 }) {

    function myEvent(){
        console.log('TANDAAAAN', par1)
    }

  return (
    <div>
        Clique para ativar o evento:
        <button onClick={myEvent}>Aperta</button>
    </div>
  )
}

export default componente1events