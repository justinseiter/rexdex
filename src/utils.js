const prettyUrl = (url) => {
    const host = new URL(url).host;
    return host.replace(/^www\./, "");
};

module.exports = {
    prettyUrl,
};
