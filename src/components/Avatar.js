import PropTypes from "prop-types";

function Avatar({ src = '', size = 24, alt = "" }) {
    return <img className="Avatar" src={src} width={size} alt={alt} />;
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number,
    alt: PropTypes.string,
};

export default Avatar;
