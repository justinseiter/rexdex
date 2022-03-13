import Avatar from "./Avatar";
import { prettyUrl } from "../utils";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

function ExchangeListItem({
    id,
    rank,
    image = "",
    name = "",
    country = "",
    url = "",
}) {
    return (
        <>
            <tr>
                <td>{rank}</td>
                <td className="has-avatar">
                    <div>
                        {/* alt tag intentionally omitted */}
                        {/* see: https://shrtm.nu/6u9P */}
                        <Avatar src={image} />
                        <Link to={`/${id}`}>{name}</Link>
                    </div>
                </td>
                <td>{country || "N/A"}</td>
                <td>
                    {url ? (
                        <a href={url} target="_blank" rel="noreferrer">
                            {prettyUrl(url)}
                        </a>
                    ) : (
                        <>N/A</>
                    )}
                </td>
            </tr>
        </>
    );
}

ExchangeListItem.propTypes = {
    id: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
    url: PropTypes.string,
};

export default ExchangeListItem;
