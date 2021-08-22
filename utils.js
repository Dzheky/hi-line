const retrieveWebsiteNameFromUrl = (url) => {
    const urlClass = new URL(url)

    return urlClass.host
}

module.exports = {
    retrieveWebsiteNameFromUrl
}