/*global require*/
require(["gtfs-exchange"], function (Agencies) {
	"use strict";
	var agencyListUrl = "proxy.ashx?http://www.gtfs-data-exchange.com/api/agencies";

	function isInWA(val) {
		return val && val.country === "United States" && val.state === "Washington";
	}

	function createAgencyTable(/**Object[]*/ agencies) {
		var table, propNames, i, l, row, cell;
		if (agencies && agencies.length) {
			table = document.createElement("table");
			table.createTBody();
			// Get agency property names.
			propNames = Object.getOwnPropertyNames(agencies[0]);

			for (i = 0, l = agencies.length; i < l; i++) {
				row = table.insertRow(i);
				for (var j = 0, jl = propNames.length; j < jl; j += 1) {
					cell = row.insertCell(j);
					cell.textContent = String(agencies[i][propNames[j]]);
				}
			}

			table.createTHead();
			row = table.insertRow(0);
			for (i = 0, l = propNames.length; i < l; i += 1) {
				cell = row.insertCell(i);
				cell.textContent = propNames[i];
			}
		}

		return table;
		
	}

	function handleAgencyList(/**{string}*/ json) {
		var agencies, agencyResponse = Agencies.parseAgencyResponse(json);


		/** Use with Array.filter() filter out non-WA agencies.
		*/

		if (agencyResponse.data) {
			agencies = agencyResponse.data;
			agencies = agencies.filter(isInWA);
			document.body.appendChild(createAgencyTable(agencies));
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