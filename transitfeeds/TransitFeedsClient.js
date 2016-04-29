// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(["../conversionUtils"], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("../conversionUtils.js"));
    } else {
        // Browser globals (root is window)
        root.TransitFeedsClient = factory(root.conversionUtils);
    }
}(this, function (conversionUtils) {
    /**
     * @module transitfeeds/TransitFeedsClient
     * @requires module:conversionUtils
     */

    /**
     * transitfeeds.com API client.
     * @class
     * @alias module:transitfeeds/TransitFeedsClient
     * @param {string} apiKey - API key.
     * @param {string} [proxyUrl=null] - URL for the proxy to get around CORS non-support. This can be omitted if the API later supports CORS.
     * @param {string} [apiRoot="http://api.transitfeeds.com/v1/"] - Root URL for the API.
     */
    function TransitFeedsClient(apiKey, proxyUrl, apiRoot) {
        if (!(apiKey && typeof apiKey === "string")) {
            throw new TypeError("No api key was provided.");
        }
        Object.defineProperties(this, {
            /**
             * @member {string} - The transitfeeds.com API key.
             */
            apiKey: {
                value: apiKey
            },
            /**
             * @member {string} - The proxy to get around API's non-support of CORS.
             */
            proxyUrl: {
                value: proxyUrl || null
            },
            /**
             * @member {string} - The transitfeeds.com API root URL.
             */
            apiRoot: {
                value: apiRoot || "http://api.transitfeeds.com/v1/"
            }
        });
    }

    /**
     * Gets the feeds for the given location.
     * @param {number} locationId - The numerical location ID. E.g., 65 for WA, USA.
     * @param {(Boolean|number)} [descendants] - Set to true to search the location's children for feeds, false otherwise.
     * Also accepts 0 or 1 to represent false or true, respectively.
     * For a state you'll want this set to true. For something smaller like a city, false should work.
     * @param {number} [page] - The "page" of results to return (if there are more results than can be returned at once due to the limit).
     * @param {number} [limit] - The maximum number of results to return.
     * @returns {Promise}
     */
    TransitFeedsClient.prototype.getFeeds = function (locationId, descendants, page, limit) {
        var url = new URL("getFeeds", this.apiRoot);
        var searchParams = new URLSearchParams("");
        if (!locationId) {
            throw new TypeError("No locationId was provided.");
        }
        searchParams.append("key", this.apiKey);
        searchParams.append("location", locationId); // 65 = WA, USA
        if (typeof descendants === "boolean" || (descendants === 0 || descendants === 1)) {
            searchParams.append("descendants", descendants ? 1 : 0); // 1;
        }
        if (typeof page === "number") {
            searchParams.append("page", page);
        }
        if (typeof limit === "number") {
            searchParams.append("limit", limit); // 100
        }

        url.search = searchParams.toString();

        return fetch([this.proxyUrl, url.toString()].join("?"), {
            method: "GET",
            mode: "cors"
        }).then(function (response) {
            return response.text();
        }).then(function (s) {
            return JSON.parse(s, function (k, v) {
                if (k === "ts" && typeof v === "number") {
                    return new Date(v * 1000);
                }
                return v;
            });
        });
    }

    return TransitFeedsClient;
}));
