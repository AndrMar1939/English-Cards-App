import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCardsInLessons } from "../../Store/selectors";
import "./style.scss";
import IconEng from "../UI/IconEng";

const Header = () => {
    const { pathname } = useLocation();
    const headerText = pathname.split(`/`);
    const navigation = useNavigate();
    const cardsNumber = useSelector(getCardsInLessons);

    // calculating cards in lesson
    const cardsCounter = cardsNumber ? (
        <h2>{cardsNumber} cards</h2>
    ) : (
        <IconEng />
    );

    // render
    return (
        <header className="header">
            {pathname === "/" ? (
                <h1>get started</h1>
            ) : (
                <>
                    {cardsCounter}
                    <h1>{headerText[headerText.length - 1]}</h1>{" "}
                    <button
                        onClick={() => {
                            navigation(-1);
                        }}
                    >
                        back
                    </button>{" "}
                </>
            )}
        </header>
    );
};

export default Header;
