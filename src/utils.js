const API_BASE_URL = "https://api.coingecko.com/api/v3/exchanges";
const PAGING_ITEMS_PER_PAGE = 10;

const prettyUrl = (url) => {
    return url.replace(/(http(s)?:\/\/)|(\/.*){1}/g, "");
};

module.exports = {
    prettyUrl,
    API_BASE_URL,
    PAGING_ITEMS_PER_PAGE,
};
