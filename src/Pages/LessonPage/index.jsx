import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { setLesson, setCardsInLesson } from "../../Store/slices/cardsSlice";
import { getLessons, getActiveLesson } from "../../Store/selectors";
import LessonsBox from "../../Components/LessonsBox";
import Card from "../../Components/Card";

const LessonPage = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const allLessons = useSelector(getLessons);
    const activeLesson = useSelector(getActiveLesson);

    // define current lesson cards, if we reload the page
    const currentLesson = allLessons.filter(
        (item) => item.url === activeLesson
    );

    const cards = currentLesson[0]?.cards;
    dispatch(setCardsInLesson(cards?.length));

    // use effect for reload page

    useEffect(() => {
        if (activeLesson === "/") {
            console.log("use effect worked");
            dispatch(setLesson(pathname.split('/')[2]));
        }
        return ()=> {
            dispatch(setCardsInLesson(0))
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
