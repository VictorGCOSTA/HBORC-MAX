import React from 'react';
import PropTypes from 'prop-types';
import Componente1Events from './componente1-events';

function component0({ tarefa, data }) {
  return (
    <div>
        <h2> { tarefa } { data }</h2>
        <span><Componente1Events par1={tarefa}/></span>
    </div>
  )
}

component0.prototype = {
    tarefa: PropTypes.string,
    data: PropTypes.string,
}
//O PropTypes.strng restringe a prop tarefa para ser somente do tipo str!

component0.defaultProps = {
    tarefa: 'Insira sua tarefa.',
    data: '00/00/0000',
}
//Indica que o valor padrão será essas strings

export default component0