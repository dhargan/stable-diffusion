import image from "../Assets/image.png";

const Result = (props) => {
    return (
        <>
            <h4>{props.promptText}</h4>
            <img alt="result" src={image} />
        </>
    );
};

export default Result;
