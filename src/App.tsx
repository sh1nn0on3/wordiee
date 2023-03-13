import "./App.scss";
import Heading from "./components/heading/Heading";

function App() {
  return <div className="App">
    <Heading type="h1" text="Wordiee"  />
    <Heading type="subtitle" text="Another Wordiee Clone"  />
    <div className="board-container">

    </div>
  </div>
}

export default App;
