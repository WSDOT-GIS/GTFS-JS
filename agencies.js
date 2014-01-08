/*global define, module*/

//{
//	"date_last_updated": 1346727786.0,
//	"feed_baseurl": "http://data.cabq.gov/transit/gtfs/google_transit.zip",
//	"name": "ABQ Ride",
//	"area": "Albuquerque",
//	"url": "http://myabqride.com",
//	"country": "United States",
//	"state": "New Mexico",
//	"license_url": "",
//	"dataexchange_url": "http://www.gtfs-data-exchange.com/agency/abq-ride/",
//	"date_added": 1340739867.0,
//	"is_official": true,
//	"dataexchange_id": "abq-ride"
//}

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
		root.returnExports = factory();
	}
}(this, function () {

	function Agency(data) {
		this.date_last_updated = data.date_last_updated; // 1346727786.0,

		this.feed_baseurl = data.feed_baseurl; // "http://data.cabq.gov/transit/gtfs/google_transit.zip",

		this.name = data.name; // "ABQ Ride",

		this.area = data.area; // "Albuquerque",

		this.url = data.url; // "http://myabqride.com",

		this.country = data.country; // "United States",

		this.state = data.state; // "New Mexico",

		this.license_url = data.license_url; // "",

		this.dataexchange_url = data.dataexchange_url; // "http://www.gtfs-data-exchange.com/agency/abq-ride/",

		this.date_added = data.date_added; // 1340739867.0,

		this.is_official = data.is_official; // true,

		this.dataexchange_id = data.dataexchange_id; // "abq-ride"
	}

	function agencyReviver(k, v) {
		var output;
		if (v && v.dataexchange_id) {
			output = new Agency(v);
		} else {
			output = v;
		}
		return output;
	}

	function parseAgencyResponse(json) {
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