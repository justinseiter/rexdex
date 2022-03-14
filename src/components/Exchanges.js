import { useEffect, useState } from "react";
import ExchangeList from "./ExchangeList";
import Pagination from "./Pagination";
import { Outlet } from "react-router-dom";
import PageHeader from "./PageHeader";
import Error from "./Error";

const PER_PAGE = 10;
const API_BASE_URL = "https://api.coingecko.com/api/v3/exchanges";
const date = new Date();

function Exchanges() {
    const [exchanges, setExchanges] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}?per_page=${PER_PAGE}&page=${page}`)
            .then((res) => {
                if (res.status === 200) {
                    const headers = [...res.headers];
                    // Parses the total_count of exchanges and divides by our paging var from response headers
                    setTotalPages(Math.ceil(headers[4][1] / PER_PAGE));
                    return res.json();
                } else {
                    throw new Error();
                }
            })
            .then((exchanges) => {
                setExchanges(exchanges);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
            });
    }, [page]);

    const headerMeta = () => {
        return (
            <>
                <b>Last updated:&nbsp;</b>
                <span>{date.toLocaleString("en-US")}</span>
            </>
        );
    };

    if (error) return <Error />;

    return (
        <>
            <PageHeader title="Exchanges" meta={headerMeta()} />
            <main className="App__main">
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
        </>
    );
}

export default Exchanges;
