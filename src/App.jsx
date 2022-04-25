


import TiraPeliculas from './components/TiraPeliculas.jsx';
import ContenedorPublicidad from './components/ContenedorPublicidad.jsx';
import Contador from './components/Contador.jsx';
import Gif from './components/Gif.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <Gif/>
        <ContenedorPublicidad>
          <h2>wooow publicida</h2>
        </ContenedorPublicidad>
        <TiraPeliculas/>
        <Contador inicial={0}/>

        <ContenedorPublicidad>
          <ul>
            <li>publi 1</li>
            <li>publi 2</li>
            <li>publi 3</li>
            <li>publi 4</li>
            <li>publi 5</li>
            </ul>
        </ContenedorPublicidad>
        
      </main>
    </div>
  );
}

export default App;
