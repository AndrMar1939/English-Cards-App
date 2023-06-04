import { useState } from "react";
import { useSelector } from "react-redux";
import { getLessonMode } from "../../Store/selectors";
import "./style.scss";

const Card = ({ item, ...props }) => {
    const mode = useSelector(getLessonMode)
    const [active, setActive] = useState(mode === 'repetition' ? true : false);
    const handleRotate = () => {
        setActive(!active);
    };
    return (
        <div className="card" onClick={handleRotate}>
            <div className={`card__item front ${active ? "active" : ""}`}>
                <h2>{item.word}</h2>
                <div>
                    <p>{item.sentence}</p>
                    <p>{item.sentenceTwo}</p>
                </div>
            </div>
            <div className={`card__item back ${active ? "active" : ""}`}>
                <h2>{item.uaWord}</h2>
                <div>
                    <p>{item.uaSentence}</p>
                    <p>{item.uaSentenceTwo}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
