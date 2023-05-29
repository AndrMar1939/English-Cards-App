import "./style.scss";

const NavigateButton = ({children, handler, path, className, ...props}) => {
    return <button className={`button-general ${className}`} onClick={()=>handler(path)}>{children}</button>
}

export default NavigateButton;