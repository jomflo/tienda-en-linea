import "./App.css";
import { Navigation } from "./components/Navigation";
import { RoutesApp } from "./Routers/RoutesApp";
import {VscInfo} from 'react-icons/vsc';

function App() {
  return (
    <div className="App">
      <div className="app-navigation">
        <Navigation />
        <div className="navigation-message"><VscInfo/> Estimado Usuario le informamos que esta pagina se encuentra en desarrollo</div>
      </div>
      <div className="app-container">
        <RoutesApp />
      </div>
      <div className="app-footer"></div>
    </div>
  );
}

export default App;
