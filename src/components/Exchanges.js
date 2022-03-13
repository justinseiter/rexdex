import { useEffect, useState } from "react";
import ExchangeList from "./ExchangeList";

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

    return (
        <div>
            <h1>Exchanges</h1>
            <ExchangeList exchanges={exchanges} loading={loading} />
            <div>
                <button onClick={() => setPage(1)}>First</button>
                <button onClick={() => setPage(page - 1)}>Previous</button>
                <span>
                    {page} of {totalPages}
                </span>
                <button onClick={() => setPage(page + 1)}>Next</button>
                <button onClick={() => setPage(totalPages)}>Last</button>
            </div>
        </div>
    );
}

export default Exchanges;
