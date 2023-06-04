import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import {getLessonsTitlesThunk, setLessonMode} from "../../Store/slices/cardsSlice";
import { getLoading, getLessonsTitles} from "../../Store/selectors";
import LessonsBox from "../../Components/LessonsBox";
import LessonIcon from "../../Components/LessonIcon";
import Spinner from "../../Components/UI/Spinner";

const LessonsListPage = () => {
    const loading = useSelector(getLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // define lessons titles like an array
    const lessonsTitlesObj = useSelector(getLessonsTitles);
    const lessonsTitles = Object.keys(lessonsTitlesObj);


    useEffect(()=>{
        if (lessonsTitles.length === 0) {
            dispatch(getLessonsTitlesThunk('/'));
        }
        
    }, [])

    // handler button click
    const handleToLessons = (path) => {
        navigate("/lessons/" + path);
        dispatch(setLessonMode('idle'))
    };
    const handleToRepetition = (path) => {
        navigate("/lessons/" + path);
        dispatch(setLessonMode('repetition'))
    };


    if (loading) {
        return <Spinner/>
    }
    return (
        <LessonsBox>
            {lessonsTitles?.map((item, index) => {
                return (
                    <LessonIcon
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
