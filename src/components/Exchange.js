import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import Avatar from "./Avatar";
import TrustScore from "../styles/components/TrustScore";

function Exchange() {
    let params = useParams();
    const [loading, setLoading] = useState(false);
    const [exchange, setExchange] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.coingecko.com/api/v3/exchanges/${params.exchangeId}`)
            .then((res) => res.json())
            .then((exchange) => {
                setExchange(exchange);
                setLoading(false);
            });
    }, [params]);

    const headerMeta = (img, name) => {
        return (
            <>
                <Avatar src={img} alt={name} />
            </>
        );
    };

    return (
        <>
            <header className="App__subheader">
                <div className="App__subheader__content">
                    <div>
                        <Link to="/" className="App__subheader__back">
                            &lsaquo;
                        </Link>
                        <h1 className="App__subheader__heading">
                            {exchange?.name}
                        </h1>
                    </div>
                    <div className="App__subheader__meta">
                        <div className="App__subheader__origins">
                            <b>Since: </b>{" "}
                            <span>{exchange?.year_established || "N/A"}</span>
                            <br />
                            <b>Country: </b>{" "}
                            <span>{exchange.country || "N/A"}</span>
                        </div>
                        <Avatar
                            src={exchange?.image}
                            alt={exchange?.name}
                            size={22}
                        />
                    </div>
                </div>
            </header>
            <main className="App__main">
                {loading ? (
                    <>Loading...</>
                ) : (
                    <>
                        {exchange.description && (
                            <>
                                <h2>Description</h2>
                                <p>{exchange.description}</p>
                                <br />
                            </>
                        )}
                        <h2>Trust Score</h2>
                        <TrustScore
                            score={exchange.trust_score || 0}
                            size={64}
                        />
                        <p>
                            Trust Score measures many facets of what an actively
                            trading cryptocurrency or cryptocurrency exchange
                            should have – namely liquidity, trading activity,
                            scale, technical expertise, cybersecurity and more.
                        </p>
                        <p>
                            Read more:{" "}
                            <a
                                href="https://blog.coingecko.com/trust-score-explained/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://blog.coingecko.com/trust-score-explained/
                            </a>
                        </p>
                        <br />
                        <h2>Social</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exchange.twitter_handle && (
                                    <tr>
                                        <td>Twitter</td>
                                        <td>
                                            <a
                                                target="_blank"
                                                href={`https://twitter.com/${exchange.twitter_handle}`}
                                                rel="noreferrer"
                                            >{`https://twitter.com/${exchange.twitter_handle}`}</a>
                                        </td>
                                    </tr>
                                )}
                                {exchange.facebook_url && (
                                    <tr>
                                        <td>Facebook</td>
                                        <td>
                                            <a
                                                target="_blank"
                                                href={exchange.facebook_url}
                                                rel="noreferrer"
                                            >
                                                {exchange.facebook_url}
                                            </a>
                                        </td>
                                    </tr>
                                )}
                                {exchange.reddit_url && (
                                    <tr>
                                        <td>Reddit</td>
                                        <td>
                                            <a
                                                target="_blank"
                                                href={exchange.reddit_url}
                                                rel="noreferrer"
                                            >
                                                {exchange.reddit_url}
                                            </a>
                                        </td>
                                    </tr>
                                )}
                                {exchange.telegram_url && (
                                    <tr>
                                        <td>Telegram</td>
                                        <td>
                                            <a
                                                target="_blank"
                                                href={exchange.telegram_url}
                                                rel="noreferrer"
                                            >
                                                {exchange.telegram_url}
                                            </a>
                                        </td>
                                    </tr>
                                )}
                                {exchange.slack_url && (
                                    <tr>
                                        <td>Slack</td>
                                        <td>
                                            <a
                                                target="_blank"
                                                href={exchange.slack_url}
                                                rel="noreferrer"
                                            >
                                                {exchange.slack_url}
                                            </a>
                                        </td>
                                    </tr>
                                )}
                                {exchange.other_url_1 && (
                                    <tr>
                                        <td>Other</td>
                                        <td>
                                            <a
                                                target="_blank"
                                                href={exchange.other_url_1}
                                                rel="noreferrer"
                                            >
                                                {exchange.other_url_1}
                                            </a>
                                        </td>
                                    </tr>
                                )}
                                {exchange.other_url_2 && (
                                    <tr>
                                        <td>Other</td>
                                        <td>
                                            <a
                                                target="_blank"
                                                href={exchange.other_url_2}
                                                rel="noreferrer"
                                            >
                                                {exchange.other_url_2}
                                            </a>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>
                )}
            </main>
        </>
    );
}

export default Exchange;
