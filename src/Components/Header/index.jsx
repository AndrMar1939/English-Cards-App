import { useLocation, useNavigate } from "react-router-dom";

import "./style.scss";
import NavigateButton from "../UI/NavigateButton";


const Header = () => {
    const { pathname } = useLocation();
    const navigation = useNavigate();
    const headerText = pathname.split(`/`).join('');
    return (
        <header className="header">
            
            {pathname === '/' ? <h1>get started</h1> : <><h1>{headerText}</h1> <button onClick={()=>{navigation(-1)}}>back</button> </>}
        </header>
    )
};

export default Header;