require(["agencies", "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text.min.js!agencies.txt"], function (Agencies, agencyResponse) {
	var agencies = Agencies.parseAgencyResponse(agencyResponse);
	console.log(agencies);
});