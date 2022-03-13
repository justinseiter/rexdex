import { useEffect, useState } from "react";
import ExchangeList from "./ExchangeList";
import Pagination from "./Pagination";
import { Outlet } from "react-router-dom";

const PER_PAGE = 10;
const API_BASE_URL = "https://api.coingecko.com/api/v3/exchanges";

function Exchanges() {
    const [exchanges, setExchanges] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}?per_page=${PER_PAGE}&page=${page}`)
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
        <>
            <h1>Exchanges</h1>
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePagingClick={(pageNum) => setPage(pageNum)}
                loading={loading}
            />
            <div style={{minHeight: '700px'}}>
            <ExchangeList exchanges={exchanges} loading={loading} />
            </div>
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePagingClick={(pageNum) => setPage(pageNum)}
                loading={loading}
            />
        </>
    );
}

export default Exchanges;
