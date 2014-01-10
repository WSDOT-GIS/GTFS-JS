/*global require*/
require(["gtfs-exchange.min"], function (Gtfs) {
	"use strict";
	var agencyListUrl = "proxy.ashx?http://www.gtfs-data-exchange.com/api/agencies";

	function isInWA(val) {
		return val && val.country === "United States" && val.state === "Washington";
	}

	function createAgencyTable(/**Object[]*/ agencies) {
		var table, insertCell, row, propNames, thead, previousArea;

		propNames = [
			"name",
			//"area",
			//"country",
			//"state",
			"dataexchange_id",
			"url",
			"dataexchange_url",
			"feed_baseurl",
			"license_url",
			"date_added",
			"date_last_updated",
			"is_official"
		];



		if (agencies && agencies.length) {
			table = document.createElement("table");
			table.createTBody();
			////// Get agency property names.
			////propNames = Object.getOwnPropertyNames(agencies[0]);

			/** Inserts a cell into a row.
			 * @this {Object} Properties are row and agency.
			*/
			insertCell = function (propName, j) {
				var urlRe = /url$/, dateRe = /date/, a, cb;
				var cell = this.row.insertCell(j);
				var value = this.agency[propName];
				if (urlRe.test(propName) && value) {
					a = document.createElement("a");
					a.textContent = "link";
					a.href = value;
					cell.appendChild(a);
				} else if(dateRe.test(propName)) {
					cell.textContent = value.toISOString().slice(0, 10);
					cell.title = value.toLocaleString();
				} else if (typeof value === "boolean") {
					cb = document.createElement("input");
					cb.type = "checkbox";
					cb.checked = value;
					cb.readOnly = true;
					cb.disabled = true;
					cell.appendChild(cb);
				} else {
					cell.textContent = String(value);
				}
			};

			// Add rows for each agency.
			agencies.forEach(function (agency) {
				var row, cell;
				// Add an area header if this is a new area.
				if (agency.area !== previousArea) {
					previousArea = agency.area;
					row = table.insertRow(-1);
					cell = document.createElement("th");
					cell.textContent = agency.area || "Unspecified Area";
					cell.setAttribute("colspan", 9);
					row.appendChild(cell);
				}
				row = table.insertRow(-1);
				if (!agency.is_official) {
					row.classList.add("unofficial");
				}
				propNames.forEach(insertCell, { row: row, agency: agency });
			});

			// Add the header
			thead = table.createTHead();
			row = thead.insertRow(0);

			propNames.forEach(function (propName) {
				var cell = document.createElement("th");
				cell.textContent = propName.replace(/_/g, " ");
				row.appendChild(cell);
			});
		}

		return table;
		
	}

	function handleAgencyList(/**{string}*/ json) {
		var agencies, agencyResponse = Gtfs.parseAgencyResponse(json);


		/** Use with Array.filter() filter out non-WA agencies.
		*/

		if (agencyResponse.data) {
			agencies = agencyResponse.data;
			agencies = agencies.filter(isInWA);
			// Sort by area
			agencies.sort(function (a, b) {
				if (a.area > b.area) {
					return 1;
				} else if (a.area < b.area) {
					return -1;
				} else if (a.name > b.name) {
					return 1;
				} else if (a.name < b.name) {
					return -1;
				} else {
					return 0;
				}
			});
			document.body.appendChild(createAgencyTable(agencies));
		}
	}

	function sendRequestForAgencyList() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", agencyListUrl, true);
		xhr.onload = function () {
			var progress = document.getElementById("agenciesTableProgress");
			progress.parentElement.removeChild(progress);
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