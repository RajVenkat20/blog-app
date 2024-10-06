import errorImage from "../images/NotFound.png";

// describing them as function components and not as class components as they are outdated practices
const NotFound = () => {
    return (
        <>
            <div className="not-found-container">
                <img src={errorImage} alt="404 Error - Page Not Found" className="not-found-image" />
            </div>
        </>
    );
};

export default NotFound;