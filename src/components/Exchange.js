import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Exchange() {
    let params = useParams();
    const [exchange, setExchange] = useState();

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`)
            .then((res) => res.json())
            .then((exchange) => {
                setExchange(exchange);
            });
    }, [params]);
    return (
        <>
            <h1>hi {JSON.stringify(exchange)}</h1>
        </>
    );
}

export default Exchange;
