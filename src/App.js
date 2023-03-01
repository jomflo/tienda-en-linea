import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Search } from "./components/Search";
import { RoutesApp } from "./Routers/RoutesApp";

function App() {
  return (
    <div className="App">
      <div className="app-navigation">
        <Navigation />
        {/* <Search/> */}
      </div>
      <div className="app-container">
        <RoutesApp />
      </div>
      <div className="app-footer"></div>
    </div>
  );
}

export default App;
