import { Context } from "../Context";
import { useContext, useState } from "react";
import { css } from "aphrodite";
import { IngameStyles } from "../styles/IngameStyles";
import { useNavigate } from "react-router-dom";

export const Ingame = () => {

    const { nightMode, dispatch, gameState } = useContext(Context);
    const navigate = useNavigate();
    const [clicks, setClicks] = useState(0);
    const [computerTurn, setComputerTurn] = useState(false);

    const handleCellClick = (e) => {
        if(gameState.gameOver) return;
        if(computerTurn)return;
        if(e.target.id !== "unoccupied")return;
        setClicks(clicks + 1);
        if(clicks === 1){
            setClicks(0);
            dispatch({type:"MOVE_PLAYED", cellsTaken:gameState.cellsTaken + 2, currentPlayer:gameState.currentPlayer === 1 ? 2 : 1, message:gameState.currentPlayer === 1 ? "Red's Turn" : 
            (gameState.gameMode === "vs_computer" ? "Your Turn" : "Blue's Turn")})

            if(gameState.cellsTaken + 2 === gameState.cells){
                if(gameState.currentPlayer === 1)e.target.id = "blue"
                if(gameState.currentPlayer === 2)e.target.id = "red"
                return dispatch({type:"END_GAME", gameOver:true, message:gameState.currentPlayer === 2 ? "Red Wins!" : (gameState.gameMode === "vs_computer" ? "You Win!" : "Blue Wins!")})
            }
            
            if(gameState.gameMode === "vs_computer"){
                setComputerTurn(true);
                setTimeout(() => {
                    const computerAmount = gameState.cellsTaken + 2 === 15 ? 1 : Math.floor(Math.random() * (3 - 1)) + 1;
                    computerSelectCell(computerAmount, gameState.cellsTaken + 2)
                    setComputerTurn(false);
                }, 2000);
            }
        }
        if(gameState.currentPlayer === 1)return e.target.id = "blue"
        if(gameState.currentPlayer === 2)return e.target.id = "red"
        
    }

    const computerSelectCell = (computerAmount, cellsTaken) => {
        computerSelectCell1()
        if(computerAmount === 2){
            computerSelectCell2()
        }
        if(cellsTaken + computerAmount === gameState.cells){
            return dispatch({type:"END_GAME", gameOver:true, message:gameState.currentPlayer === 1 ? "Red Wins!" : (gameState.gameMode === "vs_computer" ? "You Win!" : "Blue Wins!")})
        }
        dispatch({type:"MOVE_PLAYED", cellsTaken:cellsTaken + computerAmount, currentPlayer:1, message:"Your Turn"})

    }

    const computerSelectCell1 = () => {
        let selectedCell1Index = Math.floor(Math.random()*gameState.cells)
        let selectedCell1 = document.querySelector(`[title="${selectedCell1Index}"]`)
        while(selectedCell1.id !== "unoccupied"){
            selectedCell1Index = Math.floor(Math.random()*gameState.cells)
            selectedCell1 = document.querySelector(`[title="${selectedCell1Index}"]`)
        }
        selectedCell1.id = "red"
    }

    const computerSelectCell2 = () => {
        let selectedCell2Index = Math.floor(Math.random()*gameState.cells)
        let selectedCell2 = document.querySelector(`[title="${selectedCell2Index}"]`)
        while(selectedCell2.id !== "unoccupied"){
            selectedCell2Index = Math.floor(Math.random()*gameState.cells)
            selectedCell2 = document.querySelector(`[title="${selectedCell2Index}"]`)
        }
        selectedCell2.id = "red"
    }

    //Function for the done button
    const doneClick = () => {
        if(gameState.gameOver) return;
        setClicks(0)
        dispatch({type:"MOVE_PLAYED", cellsTaken:gameState.cellsTaken + 1, currentPlayer:gameState.currentPlayer === 1 ? 2 : 1, message:gameState.currentPlayer === 1 ? "Red's Turn" : 
        (gameState.gameMode === "vs_computer" ? "Your Turn" : "Blue's Turn")})

        if(gameState.cellsTaken + 1 === gameState.cells){
            return dispatch({type:"END_GAME", gameOver:true, message:gameState.currentPlayer === 2 ? "Red Wins!" : (gameState.gameMode === "vs_computer" ? "You Win!" : "Blue Wins!")})
        }
        
        if(gameState.gameMode === "vs_computer"){
            setComputerTurn(true);
            setTimeout(() => {
                const computerAmount = gameState.cellsTaken + 1 === 15 ? 1 : Math.floor(Math.random() * (3 - 1)) + 1;
                console.log(computerAmount)
                computerSelectCell(computerAmount, gameState.cellsTaken + 1)
                setComputerTurn(false);
            }, 2000);
        }
    }

    //Function for the play again button
    const playAgain = () => {
        dispatch({type:"PLAY_AGAIN", gameMode:gameState.gameMode})
        navigate("/gameSetting")
    }
    const mainMenu = () => {
        dispatch({type:"RESET"})
        navigate("/")
    }

    return (
        <div id={nightMode ? "nightMode" : ""} className={css(IngameStyles.container)}>
            <h1>{gameState.message}</h1>
            <br/>
            <div className={css(IngameStyles.board)}>
                {gameState.cells && Array(gameState.cells).fill().map((cell,i) => {
                    return <div title={`${i}`} id="unoccupied" onClick={e => handleCellClick(e)} className={css(IngameStyles.cell)} key={i}>{cell}</div>
                })}
            </div>
            <br/>
            {gameState.gameOver ? 
            <div>
                <button className={css(IngameStyles.button)} onClick={() => playAgain()}>Play Again</button>
                <button className={css(IngameStyles.button)} onClick={() => mainMenu()}>Main Menu</button>
            </div>
            :<button className={css(IngameStyles.button)} disabled={computerTurn || !clicks} onClick={() => doneClick()}>Done</button>}
        </div>
    );
}