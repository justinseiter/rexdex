import PropTypes from "prop-types";
import Avatar from "./Avatar";

function ExchangeList({ exchanges, loading }) {
    if (loading) return <>Loading...</>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Trust Rank</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {exchanges.map((exchange) => {
                    return (
                        <tr key={exchange.trust_score_rank}>
                            <td>{exchange.trust_score_rank}</td>
                            <td>
                                <Avatar src={exchange.image} />
                                {exchange.name}
                            </td>
                            <td>{exchange.country}</td>
                            <td>{exchange.url}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

ExchangeList.propTypes = {
    exchanges: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default ExchangeList;
