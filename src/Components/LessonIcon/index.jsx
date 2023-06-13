import { useState } from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./style.scss";
import NavigateButton from "../UI/NavigateButton";

const LessonIcon = forwardRef(
    (
        { category, handleToLessons, handleToRepetition, path, ...props },
        ref
    ) => {
        const [active, setActive] = useState(false);

        const handleActive = () => {
            setActive(!active);
        };
        // text
        const text =
            category[0].toUpperCase() + category.split("_").join(" ").slice(1);

        // render
        return (
            <>
                <div
                    ref={ref}
                    onClick={handleActive}
                    className={`lesson-icon ${active ? "active" : ""}`}
                >
                    <h2>{text}</h2>
                    {active && (
                        <div className="lesson-icon__btn-box">
                            <NavigateButton
                                className={`lesson-icon__btn ${
                                    active ? "active" : ""
                                }`}
                                handler={handleToRepetition}
                                path={path}
                            >
                                Repetition
                            </NavigateButton>
                            <NavigateButton
                                handler={handleToLessons}
                                path={path}
                            >
                                Learn
                            </NavigateButton>
                        </div>
                    )}
                </div>
            </>
        );
    }
);

const MotionLessonIcon = motion(LessonIcon);

export default MotionLessonIcon;
