/*global define, module*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(["../conversionUtils", "./Datafile", "./Agency"], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require("../conversionUtils.js"), require("./Datafile.js"), require("./Agency.js"), require("node-fetch"));
    } else {
        // Browser globals (root is window)
        root.gtfsx = factory(root.conversionUtils, root.Datafile, root.Agency, root.fetch);
    }
}(this, function (conversionUtils, Datafile, Agency, fetchPolyfill) {
    /**
     * @module gtfsx
     * @deprecated
     */

    if (fetchPolyfill) {
        this.fetch = fetchPolyfill;
    }


    /** For use with JSON.parse(). Dates numbers will be converted to Date objects.
     * @param {string} k - The property name.
     * @param {?(number|string|boolean|Array|Object)} v - The value of the property.
     * @returns {?(number|string|boolean|Array|Object|Date|Agency|Datafile)} - Object representation of string.
     */
    function agencyReviver(k, v) {
        var output = v;
        // Detect an Agency.
        if (v != null && typeof v === "object") { // eslint-disable-line eqeqeq
            if (v.is_official != null) { // eslint-disable-line eqeqeq
                output = new Agency(v);
            } else if (v.md5sum) { // Detect a DataFile
                output = new Datafile(v);
            }
        }

        return output;
    }

    /**
     * @alias module:gtfsx
     */
    var output = {
        /** Parses a JSON string into an object.
         * @param {string} json - JSON string.
         * @returns {Object} - Object representation of input string.
         */
        parseAgencyResponse: function (json) {
            return JSON.parse(json, agencyReviver);
        },
        /**
         * Gets a list of {@link Agnecy} objects.
         * @param {string} [url="http://www.gtfs-data-exchange.com/api/agencies"] - A URL
         * @returns {Promise.<Agency[]>} - Response
         */
        getAgencies: function(url) {
            url = url || "http://www.gtfs-data-exchange.com/api/agencies";
            return fetch(url).then(function (response) {
                return response.text().then(function (txt) {
                    var jsonResponse = JSON.parse(txt, agencyReviver);
                    if (jsonResponse.status_code === 200 && jsonResponse.data) {
                        return jsonResponse.data;
                    } else {
                        throw new Error("Error retrieving agencies", jsonResponse);
                    }
                });
            });
        }
    };

    return output;
}));