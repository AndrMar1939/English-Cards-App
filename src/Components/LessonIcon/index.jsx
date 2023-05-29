import { useState } from "react";

import "./style.scss";
import NavigateButton from "../UI/NavigateButton";

const LessonIcon = ({ category, handleToLessons, path, ...props }) => {
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
                onClick={handleActive}
                className={`lesson-icon ${active ? "active" : ""}`}
            >
                <h2>{text}</h2>
                {active && (
                    <div className='lesson-icon__btn-box'>
                        <NavigateButton className={`lesson-icon__btn ${active ? "active" : ""}`} handler={handleToLessons} path={path}>
                            Learn
                        </NavigateButton>
                        <NavigateButton handler={handleToLessons} path={path}>
                            Learn
                        </NavigateButton>
                    </div>
                )}
            </div>
        </>
    );
};

export default LessonIcon;
