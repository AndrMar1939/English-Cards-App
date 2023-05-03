import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setLesson } from "../../Store/slices/cardsSlice";
import { getLessons} from "../../Store/selectors";
import LessonsBox from "../../Components/LessonsBox";
import LessonIcon from "../../Components/LessonIcon";

const LessonsListPage = () => {
    const lessons = useSelector(getLessons);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // handler button click
    const handleToLessons = (path) => {
        dispatch(setLesson(path));
        navigate("/lessons/" + path);
    };

    return (
        <LessonsBox>
            {lessons.map((item, index) => {
                return (
                    <LessonIcon
                        key={index}
                        category={item.name}
                        handleToLessons={handleToLessons}
                        path={item.url}
                    />
                );
            })}
        </LessonsBox>
    );
};

export default LessonsListPage;
