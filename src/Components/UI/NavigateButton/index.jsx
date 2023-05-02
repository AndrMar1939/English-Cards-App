import "./style.scss";

const NavigateButton = ({children, handler, path, ...props}) => {
    return <button className="button-general" onClick={()=>handler(path)}>{children}</button>
}

export default NavigateButton;