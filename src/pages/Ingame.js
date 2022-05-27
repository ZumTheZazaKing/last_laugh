import { Context } from "../Context";
import { useContext, useState } from "react";
import { css } from "aphrodite";
import { IngameStyles } from "../styles/IngameStyles";

export const Ingame = () => {

    const { nightMode, dispatch, gameState } = useContext(Context);
    const [clicks, setClicks] = useState(0);
    const [computerTurn, setComputerTurn] = useState(false);

    const handleCellClick = (e) => {
        if(gameState.gameOver) return;
        if(Boolean(e.target.id) === "unoccupied")return;
        setClicks(clicks + 1);
        if(clicks === 1){
            setClicks(0);
            dispatch({type:"MOVE_PLAYED", cellsTaken:gameState.cellsTaken + 2, currentPlayer:gameState.currentPlayer === 1 ? 2 : 1, message:gameState.currentPlayer === 1 ? "Red's Turn" : 
            (gameState.gameMode === "vs_computer" ? "Your Turn" : "Blue's Turn")})
            
            if(gameState.gameMode === "vs_computer"){
                setComputerTurn(true);
                setTimeout(() => {
                    setComputerTurn(false);
                    const computerAmount = Math.floor(Math.random() * 2)
                    for(var i = 0; i < computerAmount; i++){
                        
                    }
                }, 2000);
            }
        }
        if(gameState.currentPlayer === 1)return e.target.id = "blue"
        if(gameState.currentPlayer === 2)return e.target.id = "red"
        
    }

    const doneClick = () => {
        if(gameState.gameOver) return;
        setClicks(0)
        dispatch({type:"MOVE_PLAYED", cellsTaken:gameState.cellsTaken + 1, currentPlayer:gameState.currentPlayer === 1 ? 2 : 1, message:gameState.currentPlayer === 1 ? "Red's Turn" : 
        (gameState.gameMode === "vs_computer" ? "Your Turn" : "Blue's Turn")})
    }

    return (
        <div id={nightMode ? "nightMode" : ""} className={css(IngameStyles.container)}>
            <h1>Clicks:{clicks}</h1>
            <h1>{gameState.message}</h1>
            <h1>Cells Taken: {gameState.cellsTaken}</h1>
            <h1>{gameState.gameMessage}</h1>
            <h1>{gameState.gameMode}</h1>
            <h1>{gameState.cells}</h1>
            <h1>{gameState.gameOver ? "True" : "False"}</h1>
            <div className={css(IngameStyles.board)}>
                {gameState.cells && Array(gameState.cells).fill().map((cell,i) => {
                    return <div title={`${i}`} id="unoccupied" onClick={e => handleCellClick(e)} className={css(IngameStyles.cell)} key={i}>{cell}</div>
                })}
            </div>
            <button disabled={computerTurn} onClick={() => doneClick()}>Done</button>
        </div>
    );
}