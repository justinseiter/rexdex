import {useEffect, useState} from "react";

function Exchanges() {
    const [exchanges, setExchanges] = useState([]);

    useEffect(() => {
       fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10')
           .then(res => res.json())
           .then(exchanges => {
               setExchanges(exchanges)
           });
    }, []);

    return(
        <div>
            <h1>Exchanges</h1>
            {JSON.stringify(exchanges)}
        </div>
    )
}

export default Exchanges;
