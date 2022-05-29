import { HomeStyles } from "../styles/HomeStyles";
import { Context } from "../Context";
import { useContext } from "react";
import { css } from "aphrodite";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const { nightMode, setNightMode, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setNightMode(!nightMode);
    localStorage.setItem("nightMode", JSON.stringify(!nightMode));
  }

  const startGame = (gameMode) => {
    dispatch({ type: "SET_GAME_MODE", gameMode: gameMode });
    navigate("/gameSetting");
  }

  return (
    <div id={nightMode ? "nightMode" : ""} className={css(HomeStyles.container)}>
      <div className={css(HomeStyles.homeMenu)}>
      <h3 className={css(HomeStyles.toggleTheme)} onClick={toggleTheme}>
        {nightMode ? "Night" : "Light"}
      </h3>
      <h1>Last Laugh</h1>
      <br/>
        <div>
          <p onClick={() => startGame("vs_computer")} className={css([HomeStyles.button])}>VS Computer</p>
          <br/>
          <p onClick={() => startGame("two_players")} className={css([HomeStyles.button, HomeStyles.twoPlayers])}>2 Players</p>
          <br/>
          <p onClick={() => navigate("/guide")} className={css([HomeStyles.button, HomeStyles.tutorial])}>How To Play</p>
        </div>
      </div>
    </div>
  );
}