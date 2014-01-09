/*global require*/
require(["gtfs-exchange"], function (Agencies) {
	"use strict";
	var agencyListUrl = "proxy.ashx?http://www.gtfs-data-exchange.com/api/agencies";

	function isInWA(val) {
		return val && val.country === "United States" && val.state === "Washington";
	}

	function handleAgencyList(/**{string}*/ json) {
		var agencies, agencyResponse = Agencies.parseAgencyResponse(json);

		/** Use with Array.filter() filter out non-WA agencies.
		*/

		if (agencyResponse.data) {
			agencies = agencyResponse.data;
			agencies = agencies.filter(isInWA);
			console.log(agencies);
		}
	}

	function sendRequestForAgencyList() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", agencyListUrl, true);
		xhr.onload = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					handleAgencyList(xhr.responseText);
				} else {
					console.error(xhr.statusText);
				}
			}
		};
		xhr.onerror = function (e) {
			console.error(e);
		};
		xhr.send();
	}

	sendRequestForAgencyList();
});