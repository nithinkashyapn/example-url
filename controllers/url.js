import URL from "../models/url"

const urlShortener = async (longURL) => {

    let newURL = new URL({
        longURL: "https://example.com",
        shortURL: "abc"
    })

    let result = await newURL.save()
    console.log(result)
}

module.exports = urlShortener;