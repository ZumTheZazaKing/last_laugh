import { css } from "aphrodite";
import { GuideStyles } from "../styles/GuideStyles";
import { useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";
import Section1 from '../images/section1.png';
import Section2 from '../images/section2.gif';
import Section3 from '../images/section3.gif';
import Section4 from '../images/section4.gif';

export const Guide = () => {

    const { nightMode } = useContext(Context);
    const navigate = useNavigate();

    const scroll = (scrollValue) => {
        window.scrollTo(0,scrollValue)
    }

    return (
        <div id={nightMode ? "nightMode" : ""}>
            <p onClick={() => navigate("/")} className={css(GuideStyles.back)}>Back</p>

            <div className={css(GuideStyles.container)}>
                <h1>Welcome To Last Laugh!</h1>
                <h3>The person with the last laugh wins!</h3>
                <br/>
                <img src={Section1} alt="" width="200" height="250"/>
                <br/>
                <p onClick={() => scroll(window.innerHeight)} className={css(GuideStyles.button)}>Next</p>
            </div>

            <div className={css(GuideStyles.container)}>
                <p onClick={() => scroll(0)} className={css(GuideStyles.button)}>Previous</p>
                <h1>How To Win</h1>
                <p>The person who conquers the last cell wins!</p>
                <br/>
                <img src={Section2} alt="" width="200" height="250"/>
                <br/>
                <p onClick={() => scroll(window.innerHeight*2)} className={css(GuideStyles.button)}>Next</p>
            </div>

            <div className={css(GuideStyles.container)}>
                <p onClick={() => scroll(window.innerHeight)} className={css(GuideStyles.button)}>Previous</p>
                <h3>You can only take a minimum of 1 cell or a maximum of 2 cells each turn.<br/></h3>
                <br/>
                <img src={Section3} alt="" width="200" height="250"/>
                <br/>
                <p onClick={() => scroll(window.innerHeight*3)} className={css(GuideStyles.button)}>Next</p>
            </div>

            <div className={css(GuideStyles.container)}>
                <p onClick={() => scroll(window.innerHeight*2)} className={css(GuideStyles.button)}>Previous</p>
                <h3>Play with a partner or against a computer<br/></h3>
                <br/>
                <img src={Section4} alt="" width="200" height="250"/>
                <br/>
            </div>
        </div>
    )
}