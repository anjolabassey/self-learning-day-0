'use strict';

module.exports = {
 arithGeo: (arr) => {
   
  let length = arr.length;
  let arithCount = 0;
  let geoCount = 0;
  diff = arr[1] - arr[0];
  ratio = arr[1] / arr[0];
  
  for(var i = length - 1; i > 0; i--){
    if((arr[i] - arr[i-1]) === diff) {
      arithCount++;
      
    }
    if((arr[i] / arr[i-1]) === ratio) {
      geoCount++;
    }
  }

  if(arithCount === length - 1) {
    return "Arithmetic";
  }
  else if (geoCount === length - 1) {
    return "Geometric";
  } 
  else if(length === 0) {
    return "0";
  }
  else  {
    return '-1'; }
  }

}