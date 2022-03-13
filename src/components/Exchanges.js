import { useEffect, useState } from "react";
import ExchangeList from "./ExchangeList";
import Pagination from "./Pagination";

const API_BASE_URL = "https://api.coingecko.com/api/v3/exchanges?per_page=10";

function Exchanges() {
    const [exchanges, setExchanges] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}&page=${page}`)
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
        <main>
            <h1>Exchanges</h1>
            <ExchangeList exchanges={exchanges} loading={loading} />
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePageClick={(val) => setPage(val)}
                loading={loading}
            />
        </main>
    );
}

export default Exchanges;
