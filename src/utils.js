const prettyUrl = (url) => {
    return url.replace(/(http(s)?:\/\/)|(\/.*){1}/g, '');
};

module.exports = {
    prettyUrl,
};
