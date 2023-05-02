import { useState } from "react";
import "./style.scss";

const Card = ({ item, ...props }) => {
    const [active, setActive] = useState(false)
    console.log(active);
    const handleRotate = () => {
        setActive(!active);
    }
    return (
        <div className="card" onClick={handleRotate}>
            <div className={`card__item front ${active ? 'active' : ''}`}>
                <h2>{item.word}</h2>
                <p>{item.sentence}</p>
            </div>
            <div className={`card__item back ${active ? 'active' : ''}`}>
                <h2>{item.uaWord}</h2>
                <p>{item.uaSentence}</p>
            </div>
        </div>
    );
};

export default Card;
