import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
