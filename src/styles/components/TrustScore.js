function TrustScore({ score, size }) {
    return (
        <div className="TrustScore" style={{ width: size, height: size }}>
            {score}
        </div>
    );
}

export default TrustScore;
