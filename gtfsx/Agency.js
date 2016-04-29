/*global define, module*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(["../conversionUtils", "./Datafile"], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require("../conversionUtils.js"), require("./Datafile.js"));
    } else {
        // Browser globals (root is window)
        root.Agency = factory(root.conversionUtils, root.Datafile);
    }
}(this, function (conversionUtils, Datafile) {

    /**
     * @module Agency
     * @deprecated
     */

    /** An object representing an agency that publishes GTFS data to GTFS-Exchange.
     * @class
     * @alias module:Agency
     * @param {Object} data - Data corresponding to class's properties.
     * @param {?Object.<string, object>} datafiles - An array of {@link DataFile} objects.
     */
    function Agency(data, datafiles) {

        var _dateAdded = null, _dateLastUpdated = null;

        Object.defineProperties(this, {
            /** @member {string} */
            dataexchange_id: {
                enumerable: true,
                writable: true,
                value: null
            }, // "abq-ride"
            /** @member {string} */
            feed_baseurl: {
                enumerable: true,
                writable: true,
                value: null
            }, // "http://data.cabq.gov/transit/gtfs/google_transit.zip",
            /** @member {string} */
            name: {
                enumerable: true,
                writable: true,
                value: null
            }, // "ABQ Ride",
            /** @member {string} */
            area: {
                enumerable: true,
                writable: true,
                value: null
            }, // "Albuquerque",
            /** @member {string} */
            url: {
                enumerable: true,
                writable: true,
                value: null
            }, // "http://myabqride.com",
            /** @member {string} */
            country: {
                enumerable: true,
                writable: true,
                value: null
            }, // "United States",
            /** @member {string} */
            state: {
                enumerable: true,
                writable: true,
                value: null
            }, // "New Mexico",
            /** @member {string} */
            license_url: {
                enumerable: true,
                writable: true,
                value: null
            }, // "",
            /** @member {string} */
            dataexchange_url: {
                enumerable: true,
                writable: true,
                value: null
            }, // "http://www.gtfs-data-exchange.com/agency/abq-ride/",
            /** @member {Date} */
            date_added: {
                enumerable: true,
                get: function () {
                    return _dateAdded;
                },
                set: function (v) {
                    _dateAdded = conversionUtils.convertDateToDateObject(v); // 1340739867.0,
                }
            },
            /** @member {Date} */
            date_last_updated: {
                enumerable: true,
                get: function () {
                    return _dateLastUpdated;
                },
                set: function (v) {
                    _dateLastUpdated = conversionUtils.convertDateToDateObject(v); // 1340739867.0,
                }
            },
            /** @member {boolean} */
            is_official: {
                enumerable: true,
                writable: true,
                value: null
            }, // true,
            /** @member {DataFile[]} */
            datafiles: {
                enumerable: true,
                writable: true,
                value: null
            },
            /** @member {string} - URL for the most current GTFS ZIP file */
            latestFeedUrl: {
                get: function () {
                    this.dataexchange_url ? this.dataexchange_url.replace(/\/$/, "") + "/latest.zip" : null;
                }
            }
        });

        if (data && typeof data === "object") {
            var name, desc;
            for (name in data) {
                if (data.hasOwnProperty(name) && this.hasOwnProperty(name)) {
                    this[name] = data[name];
                }
            }
        }
    }

    /** Group an array of agencies by area.
     * @param {Agency[]} agencies - An array of agencies.
     * @returns {Object.<string, Agency[]>} - Arrays of agencies grouped by area.
     */
    Agency.groupByArea = function (agencies) {
        var grouped = {};
        agencies.forEach(function (agency) {
            if (!grouped.hasOwnProperty(agency.area)) {
                grouped[agency.area] = [agency];
            } else {
                grouped[agency.area].push(agency);
            }

        });
        return grouped;
    };

    return Agency;
}));