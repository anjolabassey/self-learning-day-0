import {describe, it} from 'mocha';
import chai, {assert} from 'chai';
import aritGeo from '../aritGeo/main.js'

describe("neither Arithmetic nor Geometric progression:", () => {

  it("should return 0 if array is emtpy", () =>{
    let input = aritGeo([]);
    assert.equal(input, 0, `Not Empty Array`);
  });
  

  it("should return -1 if not Geometric/Arithmetic", () =>{
    let input = aritGeo([3,6,11,15]);
    assert.equal(input, -1, `Geometric`);
  });

});
describe("Arithmetic progression:", () => {

   it("should return 0 if array is emtpy", () => {
    let input = aritGeo([]);
    assert.equal(input, 0, `Not Empty Array`);
   });

   it("should return `Arithmetic` if the array is Arithmetic", () => {
     let input = aritGeo([2,4,6,8]);
     assert.equal(input, "Arithmetic", `Not Arithmetic`);
   });

   it("should return -1 if not Arithmetic/Geometric", () => {
      let input = aritGeo([2,4,16]);
      assert.equal(input, -1);
   });

});

describe("Geometric progression:", () => {

  it("should return 0 if array is emtpy", () =>{
    let input = aritGeo([]);
    assert.equal(input, 0, `Not Empty Array`);
  });
  

  it("should return -1 if not Geometric/Arithmetic", () =>{
    let input = aritGeo([3,6,11]);
    assert.equal(input, -1, `Geometric`);
  });

});