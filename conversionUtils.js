/*global define, module*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.conversionUtils = factory();
    }
}(this, function () {

    /**
     * Module converting between object types.
     * @exports conversionUtils
     */

    var output = {
        /** Converts a number representing a date returned from GTFS-Exchange into a Date object.
         * @param {(number|Date)} n - A number representing a date. If a date is passed in, that same date is returned.
         * @returns {Date} - The date equivalent of the input number.
         */
        convertDateToDateObject: function (n) {
            if (n === null) {
                return null;
            } else if (typeof n === "number") {
                return new Date(n * 1000);
            } else if (n instanceof Date) {
                return n;
            } else {
                throw new TypeError("Invalid input type");
            }
        }
    };

    return output;
}));