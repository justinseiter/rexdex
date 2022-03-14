import PropTypes from "prop-types";
import ExchangeListItem from "./ExchangeListItem";

function ExchangeList({ exchanges, loading }) {
    if (loading) return <>Loading...</>;

    return (
        <table>
            <caption>Cryptocurrency exchanges ordered by Trust Rank.</caption>
            <thead>
                <tr>
                    <th width="30px">
                        <span className="u-sr-only">Trust Rank</span>
                    </th>
                    <th>Name</th>
                    <th>Country</th>
                    <th className="u-show-on-large">Website</th>
                </tr>
            </thead>
            <tbody>
                {exchanges.map((exchange) => (
                    <ExchangeListItem
                        id={exchange.id}
                        key={exchange.id}
                        name={exchange.name}
                        country={exchange.country}
                        url={exchange.url}
                        rank={exchange.trust_score_rank}
                        image={exchange.image}
                    />
                ))}
            </tbody>
        </table>
    );
}

ExchangeList.propTypes = {
    exchanges: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default ExchangeList;
