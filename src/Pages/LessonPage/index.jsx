import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { setLesson } from "../../Store/slices/cardsSlice";
import { getLessons, getActiveLesson } from "../../Store/selectors";
import LessonsBox from "../../Components/LessonsBox";
import Card from "../../Components/Card";

const LessonPage = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const allLessons = useSelector(getLessons);
    const activeLesson = useSelector(getActiveLesson);

    // define current lesson cards
    const currentLesson = allLessons.filter(
        (item) => item.url === activeLesson
    );
    let cards;
    if (activeLesson !== "/") {
        cards = currentLesson[0].cards;
    }

    // use effect

    useEffect(() => {
        if (activeLesson === "/") {
            console.log("use effect worked");
            dispatch(setLesson(pathname.slice(1)));
        }
    }, []);


    // render
    if (!cards) {
        return
    }

    // main render
    return (
        <LessonsBox>
            {cards.map((item, index) => {
                return (
                    <Card
                        key={index}
                        item={item}
                    />
                );
            })}
        </LessonsBox>
    );
};

export default LessonPage;
