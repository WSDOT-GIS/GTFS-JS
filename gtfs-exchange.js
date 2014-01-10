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
		root.gtfsx = factory();
	}
}(this, function () {

	/** Converts a number representing a date returned from GTFS-Exchange into a Date object.
	 * @returns {Date}
	 */
	function convertDateToDateObject(/*{number}*/ n) {
		return new Date(n * 1000);
	}

	function Agency(data) {
		this.dataexchange_id = data.dataexchange_id; // "abq-ride"
		this.feed_baseurl = data.feed_baseurl; // "http://data.cabq.gov/transit/gtfs/google_transit.zip",
		this.name = data.name; // "ABQ Ride",
		this.area = data.area; // "Albuquerque",
		this.url = data.url; // "http://myabqride.com",
		this.country = data.country; // "United States",
		this.state = data.state; // "New Mexico",
		this.license_url = data.license_url; // "",
		this.dataexchange_url = data.dataexchange_url; // "http://www.gtfs-data-exchange.com/agency/abq-ride/",
		this.date_added = convertDateToDateObject(data.date_added); // 1340739867.0,
		this.date_last_updated = convertDateToDateObject(data.date_last_updated); // 1346727786.0,
		this.is_official = data.is_official; // true,
	}



	/** For use with JSON.parse(). Dates numbers will be converted to Date objects.
	 * @param {string} k - The property name.
	 * @param {?(number|string|boolean|Array|Object)} v - The value of the property.
	 * @returns {?(number|string|boolean|Array|Object|Date)}
	 */
	function agencyReviver(k, v) {
		var output = v;
		if (v.hasOwnProperty("is_official")) {
			output = Agency(v);
		}
		return output;
	}

	/** Parses a JSON string into an object. 
	 */
	function parseAgencyResponse(/**{String}*/ json) {
		return JSON.parse(json, agencyReviver);
	}

	// Just return a value to define the module export.
	// This example returns an object, but the module
	// can return a function as the exported value.
	return {
		Agency: Agency,
		parseAgencyResponse: parseAgencyResponse
	};
}));