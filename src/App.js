import logo from "./logo.svg";
import "./App.css";
import { API_KEY } from "../env";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Finder</h1>
        <button id="edit-pantry">Edit Pantry</button>
        <button id="search-for-recipies">Search for recipies</button>
        <p>{API_KEY}</p>
      </header>
    </div>
  );
}

export default App;
