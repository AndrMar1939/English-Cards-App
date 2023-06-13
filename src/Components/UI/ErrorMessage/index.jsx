import "./style.scss";
const ErrorMessage = ({message, ...props}) => {
    return (
        <div className="cover">
            <h2 className="error-message">{ `WOW, something went wrong "${message}"`}</h2>
        </div>
    );
};

export default ErrorMessage;
