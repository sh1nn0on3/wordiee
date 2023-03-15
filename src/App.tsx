import "./App.scss";
import Board from "./components/board/Board";
import Heading from "./components/heading/Heading";
import { rootState } from "./components/interface";
import { useSelector } from "react-redux";

function App() {
  const board = useSelector((state: rootState) => state.board.board);
  // const [board, setBoard] = useState([
  //   "" , "" , "" , "" , "" ,
  //   "" , "" , "" , "" , "" ,
  //   "" , "" , "" , "" , "" ,
  //   "" , "" , "" , "" , "" ,
  //   "" , "" , "" , "" , "" ,
  //   "" , "" , "" , "" , ""
  // ])

  return (
    <div className="App">
      <Heading type="h1" text="Wordiee" />
      <Heading type="subtitle" text="Another Wordiee Clone" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
