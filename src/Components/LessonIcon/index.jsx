import "./style.scss";
import NavigateButton from "../UI/NavigateButton";

const LessonIcon = ({ category, handleToLessons, path, ...props }) => {
    return (
        <div className="lesson-icon">
            <div className="lesson-icon__item">
                <h2>{category}</h2>
                <NavigateButton handler={handleToLessons} path={path}>Learn</NavigateButton>
            </div>
        </div>
    );
};

export default LessonIcon;
