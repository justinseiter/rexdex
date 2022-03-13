import Avatar from "./Avatar";
import { prettyUrl } from "../utils";
import PropTypes from "prop-types";

function ExchangeListItem({
    rank,
    image = "",
    name = "",
    country = "",
    url = "",
}) {
    return (
        <tr>
            <td>{rank}</td>
            <td className="hasAvatar">
                <div>
                    {/*alt tag intentionally omitted*/}
                    {/*see: https://shrtm.nu/6u9P*/}
                    <Avatar src={image} />
                    {name}
                </div>
            </td>
            <td>{country}</td>
            <td>
                <a href={url} target="_blank" rel="noreferrer">
                    {url && prettyUrl(url)}
                </a>
            </td>
        </tr>
    );
}

ExchangeListItem.propTypes = {
    rank: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
    url: PropTypes.string,
};

export default ExchangeListItem;
