import { useState } from "react";
import { useSelector } from "react-redux";
import { getLessonMode } from "../../Store/selectors";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import "./style.scss";

const Card = forwardRef(
    ({ item, ...props }, ref) => {
        const mode = useSelector(getLessonMode)
        const [active, setActive] = useState(mode === 'repetition' ? true : false);
        const handleRotate = () => {
            setActive(!active);
        };
        return (
            <div className="card" onClick={handleRotate} ref={ref}>
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
    }
)
const MotionCard = motion(Card);

export default MotionCard;
