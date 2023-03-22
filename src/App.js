
import CATEGORIAS from './api';
import './App.css';
import Linha from './components/Linha';

function App() {
  return (
    <div className="App">
      {CATEGORIAS.map((c, index) => {
        return <Linha key={index} title={c.title} path={c.path}
         />
      })}
      
    </div>
  );
}

export default App;
