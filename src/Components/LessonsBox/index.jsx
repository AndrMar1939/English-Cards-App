import "./style.scss";


const LessonsBox = ({children, ...props}) => {
    return (
        <main className="lesson-box">
            {children}
        </main>
    )
};

export default LessonsBox;