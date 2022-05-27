import { HomeStyles } from "../styles/HomeStyles";
import { Context } from "../Context";
import { useContext } from "react";
import { css } from "aphrodite";

export const Home = () => {

  const { nightMode, setNightMode } = useContext(Context);

  const toggleTheme = () => {
    setNightMode(!nightMode);
    localStorage.setItem("nightMode", JSON.stringify(!nightMode));
  }

  return (
    <div className={css(HomeStyles.container, nightMode ? HomeStyles.nightMode : "")}>
      <div className={css(HomeStyles.homeMenu)}>
      <h3 className={css(HomeStyles.toggleTheme)} onClick={toggleTheme}>
        {nightMode ? "Night" : "Light"}
      </h3>
      <h1>Last Laugh</h1>
      <br/>
        <div>
          <button className={css([HomeStyles.button])}>VS Computer</button>
          <br/><br/>
          <button className={css([HomeStyles.button, HomeStyles.twoPlayers])}>2 Players</button>
          <br/><br/>
          <button className={css([HomeStyles.button, HomeStyles.tutorial])}>Tutorial</button>
        </div>
      </div>
    </div>
  );
}