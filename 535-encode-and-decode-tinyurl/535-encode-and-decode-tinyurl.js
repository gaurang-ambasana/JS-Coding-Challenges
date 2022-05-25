/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const data = {};
const encode = longUrl => {
    const id = Date.now();
    data[id] = longUrl;
    return `http://tinyurl.com/${id}`;
}
/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = shortUrl => data[shortUrl.split('/').at(-1)];
/**
 * Your functions will be called as such:
 * decode(encode(url));
 */