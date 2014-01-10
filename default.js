/*global require*/
require(["gtfs-exchange"], function (Agencies) {
	"use strict";
	var agencyListUrl = "proxy.ashx?http://www.gtfs-data-exchange.com/api/agencies";

	function isInWA(val) {
		return val && val.country === "United States" && val.state === "Washington";
	}

	function createAgencyTable(/**Object[]*/ agencies) {
		var table, propNames, insertCell, row;



		if (agencies && agencies.length) {
			table = document.createElement("table");
			table.createTBody();
			// Get agency property names.
			propNames = Object.getOwnPropertyNames(agencies[0]);

			/** Inserts a cell into a row.
			 * @this {Object} Properties are row and agency.
			*/
			insertCell = function (propName, j) {
				var cell = this.row.insertCell(j);
				cell.textContent = String(this.agency[propName]);
			};

			// Add rows for each agency.
			agencies.forEach(function (agency, i) {
				var row = table.insertRow(i);
				propNames.forEach(insertCell, { row: row, agency: agency });
			});

			// Add the header
			table.createTHead();
			row = table.insertRow(0);

			propNames.forEach(function (propName, i) {
				var cell = row.insertCell(i);
				cell.textContent = propName;
			});
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