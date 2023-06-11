import { useSelector } from "react-redux";
import { getLoading } from "../../Store/selectors";
import "./style.scss";

const Wrapper = ({ children, ...props }) => {
    const loading = useSelector(getLoading);
    return <div className="wrapper">{children}</div>;
};

export default Wrapper;
