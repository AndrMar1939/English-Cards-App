import { forwardRef } from "react";
import { motion } from "framer-motion";
import "./style.scss";

const ArrowRight = forwardRef((props, ref) => {
    return (
        <img className="arrow" src="/assets/arrow_green.png" alt="arrow" ref={ref} />
    );
})

const MotionArrowRight = motion(ArrowRight);
export default MotionArrowRight;
