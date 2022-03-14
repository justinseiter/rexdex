import PropTypes from "prop-types";

function Avatar({ src = "", size = 24, alt = "", withText = false}) {
    if (src === "missing_small.png") {
        src = "https://via.placeholder.com/24.png";
    }
    return (
        <img
            className={`Avatar ${withText && 'u-mr'}`}
            src={src}
            width={size}
            height={size}
            alt={alt}
        />
    );
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number,
    alt: PropTypes.string,
    withText: PropTypes.bool
};

export default Avatar;
