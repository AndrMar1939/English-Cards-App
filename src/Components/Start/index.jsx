import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import MotionArrowRight from "../UI/ArrowRight";
import "./style.scss";


const Start = () => {
    return (
        <main className="main">
            <motion.h1  initial={{ x: "50%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: "500ms" }}>
                English for travelers
            </motion.h1>
            <div className="main__box">
                <NavLink to={"lessons"}>
                    <MotionArrowRight initial={{ x: "-500%", opacity: 0}} animate={{ x: 0, opacity: 1, transition: "3000ms" }}/>
                </NavLink>
            </div>
        </main>
    );
};

export default Start;
