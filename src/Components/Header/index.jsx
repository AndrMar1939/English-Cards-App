import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCardsInLessons } from "../../Store/selectors";

import "./style.scss";

const Header = () => {
    const { pathname } = useLocation();

    const navigation = useNavigate();
    const cardsNumber = useSelector(getCardsInLessons);

    // calculating cards in lesson and button
    const cardsCounter = cardsNumber ? <h2>{cardsNumber} cards</h2> : null;

    const button =
        pathname === "/lessons" ? null : (
            <button
                onClick={() => {
                    navigation("/lessons");
                }}
            >
                <img src="/assets/arrow-left.png" alt="arrow back" />
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
