import { useEffect, useState } from "react";

function Exchanges() {
    const apiBaseUrl = "https://api.coingecko.com/api/v3/exchanges?per_page=10";
    const [exchanges, setExchanges] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`${apiBaseUrl}&page=${page}`)
            .then((res) => {
                const headers = [...res.headers];
                setTotalPages(headers[4][1] / 10);
                return res.json();
            })
            .then((exchanges) => {
                setExchanges(exchanges);
                setLoading(false);
            });
    }, [page]);

    if (loading) return <>Loading...</>;

    return (
        <div>
            <h1>Exchanges</h1>
            {exchanges.length ? (
                <>
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
                                            <img
                                                alt=""
                                                src={exchange.image}
                                                width="30px"
                                            />
                                            {exchange.name}
                                        </td>
                                        <td>{exchange.country}</td>
                                        <td>{exchange.url}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div>
                        <button onClick={() => setPage(1)}>First</button>
                        <button onClick={() => setPage(page - 1)}>
                            Previous
                        </button>
                        <span>
                            {page} of {totalPages}
                        </span>
                        <button onClick={() => setPage(page + 1)}>Next</button>
                        <button onClick={() => setPage(totalPages)}>
                            Last
                        </button>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default Exchanges;
