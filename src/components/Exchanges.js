import { useEffect, useState } from "react";
import ExchangeList from "./ExchangeList";
import Pagination from "./Pagination";

const PER_PAGE = 10;
const API_BASE_URL = `https://api.coingecko.com/api/v3/exchanges?per_page=${PER_PAGE}`;

function Exchanges() {
    const [exchanges, setExchanges] = useState([]);
    const [page, setPage] = useState(13);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}&page=${page}`)
            .then((res) => {
                const headers = [...res.headers];
                // Parses the total_count of exchanges and divides by our paging var from response headers
                setTotalPages(Math.ceil(headers[4][1] / PER_PAGE));
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
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePagingClick={(pageNum) => setPage(pageNum)}
                loading={loading}
            />
            <ExchangeList exchanges={exchanges} loading={loading} />
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePagingClick={(pageNum) => setPage(pageNum)}
                loading={loading}
            />
        </main>
    );
}

export default Exchanges;
