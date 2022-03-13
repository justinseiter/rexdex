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
                                <img alt="" src={exchange.image} width="30px" />
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

export default ExchangeList;
