import { motion, useScroll } from "framer-motion";
import "./style.scss";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="progress-bar"
            style={{
                scaleX: scrollYProgress,
            }}
        />
    );
};

export default ProgressBar;
