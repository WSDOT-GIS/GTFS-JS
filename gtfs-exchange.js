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

	/** Represents an element of the datafile array returned from the API endpoint http://www.gtfs-data-exchange.com/api/agency?agency={dataexchange_id}.
	 * @param {Object} data
	*/
	function Datafile(data) {
		/** @member {string} */
		this.description = data.description; // "Archived from http://data.cabq.gov/transit/gtfs/google_transit.zip",
		/** @member {string} */
		this.md5sum = data.md5sum; // "f96e9fa37f13789e3d98f09b599e9c4a",
		/** @member {string} */
		this.file_url = data.file_url; // "http://gtfs.s3.amazonaws.com/abq-ride_20120904_0303.zip",
		/** @member {string} */
		this.agencies = data.agencies; // ["abq-ride"],
		/** @member {string} */
		this.filename = data.filename; // "abq-ride_20120904_0303.zip",
		/** @member {Date} */
		this.date_added = convertDateToDateObject(data.date_added); // 1346727786.0,
		/** @member {string} */
		this.uploaded_by_user = data.uploaded_by_user; // "abq-ride-archiver",
		/** @member {number} */
		this.size = data.size; // 3094785
	}

	/** An object representing an agency that publishes GTFS data to GTFS-Exchange.
	 * @param {Object} data
	 * @param {?Object.<string, object>} datafiles
	 */
	function Agency(data, datafiles) {
		/** @member {string} */
		this.dataexchange_id = data.dataexchange_id; // "abq-ride"
		/** @member {string} */
		this.feed_baseurl = data.feed_baseurl; // "http://data.cabq.gov/transit/gtfs/google_transit.zip",
		/** @member {string} */
		this.name = data.name; // "ABQ Ride",
		/** @member {string} */
		this.area = data.area; // "Albuquerque",
		/** @member {string} */
		this.url = data.url; // "http://myabqride.com",
		/** @member {string} */
		this.country = data.country; // "United States",
		/** @member {string} */
		this.state = data.state; // "New Mexico",
		/** @member {string} */
		this.license_url = data.license_url; // "",
		/** @member {string} */
		this.dataexchange_url = data.dataexchange_url; // "http://www.gtfs-data-exchange.com/agency/abq-ride/",
		/** @member {Date} */
		this.date_added = convertDateToDateObject(data.date_added); // 1340739867.0,
		/** @member {Date} */
		this.date_last_updated = convertDateToDateObject(data.date_last_updated); // 1346727786.0,
		/** @member {boolean} */
		this.is_official = data.is_official; // true,
		/** @member {DataFile[]} */
		this.datafiles = datafiles || null;

		/** @member {string} latestFeedUrl - URL for the most current GTFS ZIP file */
		this.latestFeedUrl = this.dataexchange_url ? this.dataexchange_url.replace(/\/$/, "") + "/latest.zip" : null;
	}

	/** Group an array of agencies by area.
	 * @returns {Object.<string, Agency[]>}
	 */
	Agency.groupByArea = function (/**{Agency[]}*/ agencies) {
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



	/** For use with JSON.parse(). Dates numbers will be converted to Date objects.
	 * @param {string} k - The property name.
	 * @param {?(number|string|boolean|Array|Object)} v - The value of the property.
	 * @returns {?(number|string|boolean|Array|Object|Date|Agency|Datafile)}
	 */
	function agencyReviver(k, v) {
		var output = v;
		/*jshint eqnull:true*/
		// Detect an Agency.
		if (v.is_official != null) {
			output = new Agency(v);
		} else if (v.md5sum) { // Detect a DataFile
			output = new Datafile(v);
		}
		/*jshint eqnull:false*/

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
		Datafile: Datafile,
		parseAgencyResponse: parseAgencyResponse
	};
}));