import "./App.css";
import '../src/styles/Amazon.css'
import { Navigation } from "./components/Navigation";
import { RoutesApp } from "./Routers/RoutesApp";
import {VscInfo} from 'react-icons/vsc';
import { FooterPage } from "./components/FooterPage";

function App() {
  return (
    <div className="App">
      <div className="app-navigation">
        <Navigation />
        <div className="navigation-message"><VscInfo/> Estimado Usuario usted puede realizar las compras en
        <a
        className="navigation-link-amazon"
        href='https://amzn.to/4mtw5gO'
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        > Amazon </a> y la agencia <a className="navigation-link-agencia" href='https://wa.me/+50588971721'>USA Ship</a> se las trae hasta su casa con las mejores tarifas del Occidente de Nicaragua</div>
      </div>
      <div className="app-container">
        <RoutesApp />
      </div>
      <FooterPage></FooterPage>
    </div>
  );
}

export default App;
