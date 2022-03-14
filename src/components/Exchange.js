import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import TrustScore from "./TrustScore";
import Error from "./Error";
import { API_BASE_URL } from "../utils";

function Exchange() {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [exchange, setExchange] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}/${params.exchangeId}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error();
                }
            })
            .then((exchange) => {
                setExchange(exchange);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
            });
    }, [params]);

    if (error) return <Error />;

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
                        <ul className="Exchange__social">
                            {exchange.twitter_handle && (
                                <li className="Exchange__social__item">
                                    <a
                                        target="_blank"
                                        href={`https://twitter.com/${exchange.twitter_handle}`}
                                        rel="noreferrer"
                                    >
                                        Twitter
                                    </a>
                                </li>
                            )}
                            {exchange.facebook_url && (
                                <li className="Exchange__social__item">
                                    <a
                                        target="_blank"
                                        href={exchange.facebook_url}
                                        rel="noreferrer"
                                    >
                                        Facebook
                                    </a>
                                </li>
                            )}
                            {exchange.reddit_url && (
                                <li className="Exchange__social__item">
                                    <a
                                        target="_blank"
                                        href={exchange.reddit_url}
                                        rel="noreferrer"
                                    >
                                        Reddit
                                    </a>
                                </li>
                            )}
                            {exchange.telegram_url && (
                                <li className="Exchange__social__item">
                                    <a
                                        target="_blank"
                                        href={exchange.telegram_url}
                                        rel="noreferrer"
                                    >
                                        Telegram
                                    </a>
                                </li>
                            )}
                            {exchange.slack_url && (
                                <li className="Exchange__social__item">
                                    <div className="Exchange__social__label">
                                        Slack:
                                    </div>
                                    <div>
                                        <a
                                            target="_blank"
                                            href={exchange.slack_url}
                                            rel="noreferrer"
                                            className="u-truncate"
                                        >
                                            {exchange.slack_url}
                                        </a>
                                    </div>
                                </li>
                            )}
                            {exchange.other_url_1 && (
                                <li className="Exchange__social__item">
                                    <a
                                        target="_blank"
                                        href={exchange.other_url_1}
                                        rel="noreferrer"
                                        className="u-truncate"
                                    >
                                        {exchange.other_url_1}
                                    </a>
                                </li>
                            )}
                            {exchange.other_url_2 && (
                                <li className="Exchange__social__item">
                                    <a
                                        target="_blank"
                                        href={exchange.other_url_2}
                                        rel="noreferrer"
                                        className="u-truncate"
                                    >
                                        {exchange.other_url_2}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </>
                )}
            </main>
        </>
    );
}

export default Exchange;
