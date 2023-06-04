import { NavLink } from "react-router-dom";

import ArrowRight from "../UI/ArrowRight";
import "./style.scss";

const Start = () => {
    return (
        <main className="main">
            <h1>English for travelers</h1>
            <div className="main__box">
                <NavLink  to={"lessons"}>
                    <ArrowRight/>
                </NavLink>
            </div>
        </main>
    );
};

export default Start;
