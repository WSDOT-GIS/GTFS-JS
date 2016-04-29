/*global define, module*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(["../conversionUtils"], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require("../conversionUtils.js"));
    } else {
        // Browser globals (root is window)
        root.gtfsx = factory(root.conversionUtils);
    }
}(this, function (conversionUtils) {
    /**
     * @module Datafile
     * @deprecated
     */

    /** Represents an element of the datafile array returned from the API endpoint http://www.gtfs-data-exchange.com/api/agency?agency={dataexchange_id}.
     * @constructor
     * @alias module:Datafile
     * @param {Object} data - Values to populate this object's parameters.
    */
    function Datafile(data) {
        var _dateAdded;

        Object.defineProperties(this, {
            /** @member {string} */
            description: {
                enumerable: true,
                writable: true,
                value: null
            }, // "Archived from http://data.cabq.gov/transit/gtfs/google_transit.zip",
            /** @member {string} */
            md5sum: {
                enumerable: true,
                writable: true,
                value: null
            }, // "f96e9fa37f13789e3d98f09b599e9c4a",
            /** @member {string} */
            file_url: {
                enumerable: true,
                writable: true,
                value: null
            }, // "http://gtfs.s3.amazonaws.com/abq-ride_20120904_0303.zip",
            /** @member {string} */
            agencies: {
                enumerable: true,
                writable: true,
                value: null
            }, // ["abq-ride"],
            /**
             * @member {string}
             * @example
             * "abq-ride_20120904_0303.zip"
             * */
            filename: {
                enumerable: true,
                writable: true,
                value: null
            }, // "abq-ride_20120904_0303.zip",
            /**
             * @member {Date}
             */
            date_added: {
                set: function (v) {
                    if (v == null) { // eslint-disable-line eqeqeq
                        _dateAdded = null;
                    } else if (v instanceof Date) {
                        _dateAdded = v;
                    } else if (typeof v === "number") {
                        conversionUtils.convertDateToDateObject(v);
                    }
                },
                get: function () {
                    return _dateAdded;
                }
            },
            /** @member {string} */
            uploaded_by_user: {
                enumerable: true,
                writable: true,
                value: null
            }, // "abq-ride-archiver",
            /** @member {number} */
            size: {
                enumerable: true,
                writable: true,
                value: null
            } // 3094785
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

    return Datafile;
}));