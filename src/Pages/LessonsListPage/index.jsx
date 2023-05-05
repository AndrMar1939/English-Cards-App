import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import {getApiInfoThunk } from "../../Store/slices/cardsSlice";
import { getApiInfo, getLoading} from "../../Store/selectors";
import LessonsBox from "../../Components/LessonsBox";
import LessonIcon from "../../Components/LessonIcon";

const LessonsListPage = () => {
    const loading = useSelector(getLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // define lessons titles
    const apiInfo = useSelector(getApiInfo);
    let lessonsTitles;
    if (!!apiInfo) {
        lessonsTitles = Object.keys(apiInfo.definitions);
    }

    useEffect(()=>{
        dispatch(getApiInfoThunk('/'))
    }, [])

    // handler button click
    const handleToLessons = (path) => {
        navigate("/lessons/" + path);
    };

    if (loading) {
        return <h1>...loading</h1>
    }
    return (
        <LessonsBox>
            {lessonsTitles?.map((item, index) => {
                return (
                    <LessonIcon
                        key={index}
                        category={item}
                        handleToLessons={handleToLessons}
                        path={item}
                    />
                );
            })}
        </LessonsBox>
    );
};

export default LessonsListPage;
