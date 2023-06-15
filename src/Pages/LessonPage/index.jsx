import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";

import { setCardsInLesson, getCardsThunk } from "../../Store/slices/cardsSlice";
import { getLoading, getApiError, getCards } from "../../Store/selectors";
import LessonsBox from "../../Components/LessonsBox";
import MotionCard from "../../Components/Card";
import Spinner from "../../Components/UI/Spinner";
import ErrorMessage from "../../Components/UI/ErrorMessage";
import ProgressBar from "../../Components/UI/ProgressBar";

// component
const LessonPage = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const loading = useSelector(getLoading);
    const error = useSelector(getApiError);
    const cards = useSelector(getCards);



    // use effect for reload page

    useEffect(() => {
        dispatch(getCardsThunk(pathname.split("/")[2]));
        return () => {
            dispatch(setCardsInLesson(0));
        };
    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorMessage message={error?.message} />;
    }

    // main render
    return (
        <>
            <LessonsBox>
                {cards?.map((item, index) => {
                    return (
                        <MotionCard
                            initial={{
                                y: "10%",
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            viewport={{ amount: 0.1 }}
                            key={index}
                            item={item}
                        />
                    );
                })}
                <ProgressBar />
            </LessonsBox>
        </>
    );
};

export default LessonPage;
