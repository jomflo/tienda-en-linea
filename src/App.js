import logo from './logo.svg';
import comcaslogo from './COMCAS logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <img src={comcaslogo} className="App-logo" alt="logo" />
        <p className='nombreEmpresa'>
          COMCAS
        </p>
        <p className='distribuidorAutorizado'>
         {/*Edit <code>src/App.js</code> and save to reload.*/}
         Distrribuidor Autorizado de Claro
        </p>
        {
          /*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */
        }
        <p>
          Contactanos Vía WhatsApp Con:
        </p>
        <a
          className="App-link"
          href="https://wa.me/+50581759532?text=Hola Jose, he visto la pagina de COMCAS y estoy interesado en los
          servicios de Claro, me podrias dar mas informacion?."
          target="_blank"
          rel="noopener noreferrer"
        >
          Jose Florez
        </a>
      </header>
    </div>
  );
}

export default App;