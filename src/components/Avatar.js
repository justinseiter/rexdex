import PropTypes from "prop-types";

function Avatar({ src = "", size = 24, alt = "" }) {
    if (src === "missing_small.png") {
        src = "https://via.placeholder.com/24.png";
    }
    return <img className="Avatar" src={src} width={size} alt={alt} />;
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number,
    alt: PropTypes.string,
};

export default Avatar;
