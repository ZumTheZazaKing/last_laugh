import { css } from "aphrodite";
import { GuideStyles } from "../styles/GuideStyles";
import { useContext } from "react";
import { Context } from "../Context";

export const Guide = () => {

    const { nightMode } = useContext(Context);

    return (
        <div id={nightMode ? "nightMode" : ""} className={css(GuideStyles.container)}>
            <h1>Guide</h1>
        </div>
    )
}