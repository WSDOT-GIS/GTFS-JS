/*eslint-env node, jasmine */

var gtfsx = require("../gtfsx/gtfsx.js");
var Agency = require("../gtfsx/Agency.js");

describe("gtfsx tests", function () {
    it("should be able to retrieve agencies list", function (done) {
        gtfsx.getAgencies("http://www.gtfs-data-exchange.com/api/agencies").then(function (agencies) {
            expect(Array.isArray(agencies)).toBe(true);
            expect(agencies.length).toBeGreaterThan(0);
            expect(agencies[0] instanceof Agency);
            done();
        }, function (error) {
            done.fail(error);
        });
    });
});