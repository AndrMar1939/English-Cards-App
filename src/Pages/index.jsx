import { useSelector, useDispatch } from "react-redux";
import { Navigate, Route, Routes, NavLink, useParams, useLocation } from "react-router-dom";
import { getLoading } from "../Store/selectors";

import Wrapper from "../Containers/Wrapper";
import Header from "../Components/Header";
import StartPage from "./StartPage";
import LessonsListPage from "./LessonsListPage";
import LessonPage from "./LessonPage";

function Application() {
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);


    return (
        <Wrapper>
            <Header/>
            <Routes path="/">
                <Route index element={<StartPage/>}/>
                <Route path="lessons" element={<LessonsListPage/>}/>
                <Route path=":lesson" element={<LessonPage/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Wrapper>
    );
}

export default Application;
