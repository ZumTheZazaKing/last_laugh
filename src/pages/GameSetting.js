import { css } from "aphrodite";
import { Context } from "../Context";
import { useContext } from "react";
import { GameSettingStyles } from "../styles/GameSettingStyles";
import { useNavigate } from "react-router-dom";

export const GameSetting = () => {

    const { nightMode, dispatch, gameState } = useContext(Context);
    const navigate = useNavigate();

    const enterGame = (cells) => {
        dispatch({ type: "SET_CELLS", cells:cells });
        if(gameState.gameMode === "vs_computer"){
            dispatch({ type:"START_GAME", message:"Your Turn"})
        }else{
            dispatch({ type:"START_GAME", message:"Blue's Turn"})
        }
        navigate("/ingame");
    }

    return (
        <div id={nightMode ? "nightMode" : ""} className={css(GameSettingStyles.container)}>
            <h1>How Many Cells?</h1>
            <br/>
            <div className={css(GameSettingStyles.selection)}>
                <p onClick={() => {enterGame(8)}} className={css(GameSettingStyles.button)}>8 cells</p>
                <br/>
                <p onClick={() => {enterGame(16)}} className={css(GameSettingStyles.button)}>16 cells</p>
                <br/>
                <p onClick={() => {enterGame(32)}} className={css(GameSettingStyles.button)}>32 cells</p>
                <br/>
            </div>
        </div>
    );
}