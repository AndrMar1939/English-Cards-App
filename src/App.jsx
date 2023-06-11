import { useSelector, useDispatch } from "react-redux";
import { getThemeSelector } from "./Store/selectors";
import Application from "./Pages";
import "./App.scss";
import { useLayoutEffect } from "react";

function App() {
    const theme = useSelector(getThemeSelector);

    // add attribute with current theme
    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return <Application />;
}

export default App;
