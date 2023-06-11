import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getThemeSelector } from "../../Store/selectors";
import { getCardsInLessons } from "../../Store/selectors";
import ThemeButton from "../UI/ThemeButton";

import "./style.scss";

const Header = () => {
    const { pathname } = useLocation();
    const theme = useSelector(getThemeSelector);
    const navigation = useNavigate();
    const cardsNumber = useSelector(getCardsInLessons);

    // calculating cards in lesson and button
    const cardsCounter = cardsNumber ? <h2>{cardsNumber} cards</h2> : null;

    const button =
        pathname === "/lessons" ? (
            <ThemeButton />
        ) : (
            <button
            className="btn-back"
                onClick={() => {
                    navigation("/lessons");
                }}
            >   
            {
                theme === 'dark' ?
                <img src="/assets/arrow-left-white.png" alt="arrow back" loading="lazy"/>
                :
                <img src="/assets/arrow-left.png" alt="arrow back" loading="lazy"/>
            }

            </button>
        );

    // text header
    const arr = pathname.split(`/`);
    const text = arr[arr.length - 1];
    const headerText =
        text[0]?.toUpperCase() + text?.split("_").join(" ").slice(1);

    // render
    return (
        <>
            {pathname === "/" ? null : (
                <header className="header">
                    {cardsCounter}
                    <h1>{headerText}</h1>
                    {button}
                </header>
            )}
        </>
    );
};

export default Header;
