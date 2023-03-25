import CATEGORIAS from './api';
import './App.css';
import Linha from './components/Linha';
import Banner from './components/Banner';

function App() {


  return (
    <div className="App">
      <Banner/>
      {CATEGORIAS.map((c, index) => {
        return <Linha key={index} title={c.title} path={c.path}
         />
      })}
      
    </div>
  );
}

export default App;
