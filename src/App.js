import { lazy, Suspense, useReducer, useState } from "react";
import { Context } from "./Context";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home").then(module => ({default:module.Home})))

function App() {

  const [nightMode, setNightMode] = useState(JSON.parse(localStorage.getItem("nightMode")) || false);

  const initialGameState = {
    player1: 1,
    player2: 2,
    currentPlayer: 1,
    cells:null,
    cellsTaken:0,
    gameOver:true,
    message:"Blue's Turn"
  }

  const gameReducer = (state, action) => {
    switch (action.type) {
      case "RESET":
        return {...initialGameState}

      case "SET_CELLS":
        return {...state, cells:action.cells}

      case "MOVE_PLAYED":
        return {
          ...state,
            cellsTaken:action.cellsTaken,
            currentPlayer:action.currentPlayer,
            message:action.message,
        }

      case "END_GAME":
        return {
          ...state, 
          gameOver:action.gameOver, 
          message:action.message
        }

      default:
        throw Error("Action not valid");
    }
  }

  const [gameState, dispatch] = useReducer(gameReducer, initialGameState)
  
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Context.Provider value={{gameState, dispatch, nightMode, setNightMode}}>
            <Routes>

              <Route path="/" element={<Home />} />

            </Routes>
          </Context.Provider>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
