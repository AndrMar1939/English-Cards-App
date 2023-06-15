import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    getLessonsTitlesThunk,
    setLessonMode,
} from "../../Store/slices/cardsSlice";
import {
    getLoading,
    getLessonsTitles,
    getApiError,
} from "../../Store/selectors";
import LessonsBox from "../../Components/LessonsBox";
import MotionLessonIcon from "../../Components/LessonIcon";
import Spinner from "../../Components/UI/Spinner";
import ErrorMessage from "../../Components/UI/ErrorMessage";

// component
const LessonsListPage = () => {
    const loading = useSelector(getLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector(getApiError);

    // define lessons titles like an array
    const lessonsTitlesObj = useSelector(getLessonsTitles);
    const lessonsTitles = typeof lessonsTitlesObj === 'object' ? Object.keys(lessonsTitlesObj) : [];
    console.log(typeof lessonsTitlesObj  === 'object')
    useEffect(() => {
        if (lessonsTitles.length === 0) {
            dispatch(getLessonsTitlesThunk("/"));
        }
    }, []);

    // handler button click
    const handleToLessons = (path) => {
        navigate("/lessons/" + path);
        dispatch(setLessonMode("idle"));
    };
    const handleToRepetition = (path) => {
        navigate("/lessons/" + path);
        dispatch(setLessonMode("repetition"));
    };

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorMessage message={error?.message} />;
    }

    return (
        <LessonsBox>
            {lessonsTitles?.map((item, index) => {
                return (
                    <MotionLessonIcon
                        initial={
                            index % 2
                                ? { x: "10%", opacity: 0 }
                                : { x: "-10%", opacity: 0 }
                        }
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        key={index}
                        category={item}
                        handleToLessons={handleToLessons}
                        handleToRepetition={handleToRepetition}
                        path={item}
                    />
                );
            })}
        </LessonsBox>
    );
};

export default LessonsListPage;
