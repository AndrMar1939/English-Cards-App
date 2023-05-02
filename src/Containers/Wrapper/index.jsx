import "./style.scss";

const Wrapper = ({ children, ...props }) => {
    return <div className="wrapper">{children}</div>;
};

export default Wrapper;
