import { NavLink } from "react-router-dom";


import "./style.scss";


const Start = () => {
    return (
        <main className="main">
            <NavLink className="main__link" to={"lessons"}>Choose the lesson</NavLink>
        </main>
    );
};


export default Start;