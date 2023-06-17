import "./style.scss";

const SoundButton = ({ handler, ...props }) => {
    return (
        <>
            <button
                className='button-sound'
                onClick={(e) => handler(e)}
            >
                <img src="/assets/speaker.png" alt="play sound" loading="lazy" />
            </button>
        </>
    );
};

export default SoundButton;
