const assert = require('chai').assert;
const myApp = require('../src/main.js');


describe("aritGeo ", function() {

describe("handle empty array", function() {
    it("should return 0 as aritGeo for ([])", function() {
        assert.equal(myApp.aritGeo([]), 0);
    });
})

describe("handle arithmetic sequence", function() {
    it("should return Arithmetic as aritGeo for ([3, 6, 9, 12, 15])", function() {
        assert.equal(myApp.aritGeo([3, 6, 9, 12, 15]), 'Arithmetic');
    });
    it("should return Arithmetic as aritGeo for ([40, 35, 30, 25, 20])", function() {
        assert.equal(myApp.aritGeo([40, 35, 30, 30, 20]), 'Arithmetic');
    });

})

describe("handle geometric sequence", function() {
    it("should return Geometric as aritGeo for ([2, 6, 18, 54, 162])", function() {
        assert.equal(myApp.aritGeo([2, 6, 18, 54, 162]), 'Geometric');
    });

    it("should return Geometric as aritGeo for ([10, 5, 2.5, 1.25, 0.625])", function() {
        assert.equal(myApp.aritGeo([10, 5, 2.5, 1.25, 0.625]), 'Geometric');
    });
})

describe("handle neither arithmetic nor geometric sequence", function() {
    it("should return -1 as aritGeo for ([1, 2, 3, 5, 10])", function() {
        assert.equal(myApp.aritGeo([1, 2, 3, 5, 10]), -1);
    });
    it("should return -1 as aritGeo for ([2, 5, 6, 10, 20])", function() {
        assert.equal(myApp.aritGeo([2, 5, 6, 10, 20]), -1);
    });
})
});