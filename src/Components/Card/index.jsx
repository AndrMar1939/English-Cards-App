import { useState } from "react";
import { useSelector } from "react-redux";
import { getLessonMode } from "../../Store/selectors";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import "./style.scss";

const Card = forwardRef(({ item, ...props }, ref) => {
    const mode = useSelector(getLessonMode);
    const [active, setActive] = useState(mode === "repetition" ? true : false);
    // rotate cards
    const handleRotate = () => {
        setActive(!active);
    };
    // sound
    const playWord = (e) => {
        e.stopPropagation();
        const audio = new Audio(item?.sound);
        audio.autoplay = true;
    };
    const playSentenceOne = (e) => {
        e.stopPropagation();
        const audio = new Audio(item?.soundSentence);
        audio.autoplay = true;
    };
    const playSentenceTwo = (e) => {
        e.stopPropagation();
        const audio = new Audio(item?.soundSentenceTwo);
        audio.autoplay = true;
    };

    return (
        <div className="card" onClick={handleRotate} ref={ref}>
            <div className={`card__item front ${active ? "active" : ""}`}>
                <button
                    type="button"
                    onClick={(e) => {
                        playWord(e);
                    }}
                >
                    <h2>{item.word}</h2>
                </button>

                <div>
                    {item.sentence ? (
                        <button
                            type="button"
                            onClick={(e) => {
                                playSentenceOne(e);
                            }}
                        >
                            <p>{item.sentence}</p>
                        </button>
                    ) : null}

                    {item.sentenceTwo ? (
                        <button
                            type="button"
                            onClick={(e) => {
                                playSentenceTwo(e);
                            }}
                        >
                            <p>{item.sentenceTwo}</p>
                        </button>
                    ) : null}
                </div>
            </div>
            <div className={`card__item back ${active ? "active" : ""}`}>
                <h2>{item.uaWord}</h2>
                <div>
                    {item.uaSentence ? <p>{item.uaSentence}</p> : null}
                    {item.uaSentenceTwo ? <p>{item.uaSentenceTwo}</p> : null}
                </div>
            </div>
        </div>
    );
});
const MotionCard = motion(Card);

export default MotionCard;
