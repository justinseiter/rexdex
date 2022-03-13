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
            { exchanges.length ?
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
                    { exchanges.map(exchange => {
                        return (
                            <tr>
                                <td>{exchange.trust_score_rank}</td>
                                <td>
                                    <img src={exchange.image} width="30px"/>
                                    {exchange.name}
                                </td>
                                <td>{exchange.country}</td>
                                <td>{exchange.url}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                :
                <>Loading</>
            }

        </div>
    )
}

export default Exchanges;
