require(["gtfs-exchange", "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text.min.js!agencies.txt"], function (Agencies, agencyResponse) {
	"use strict";
	var agencies;
	agencyResponse = Agencies.parseAgencyResponse(agencyResponse);

	/** Use with Array.filter() filter out non-WA agencies.
	*/
	function isInWA(val) {
		return val && val.country === "United States" && val.state === "Washington";
	}

	if (agencyResponse.data) {
		agencies = agencyResponse.data;
		agencies = agencies.filter(isInWA);
		console.log(agencies);
	}
});