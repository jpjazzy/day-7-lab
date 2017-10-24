'use strict';

//Declare all store objects as literals
var firstAndPike = {
  shopName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

var seatacAirport = {
  shopName: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

var seattleCenter = {
  shopName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

var capitolHill = {
  shopName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

var alki = {
  shopName: 'Akali',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

//displays shop cookies list (with total) when called
var dispShop = function (shopObj) {
  //display results as an unorder list in browser
  var arrOfTimes = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
  var arrOfCookies = shopObj.genRandCookHr(); // Generate random avg cookies per hr array
  console.log(arrOfCookies);



  //create html elements to display on page
  var docData = document.createElement('ul');

  //add label of shop to top
  var storeName = document.createElement('div');
  storeName.innerHTML = '<h1>' + shopObj.shopName + '</h1>';
  document.body.appendChild(storeName);

  var arrOfCookiesHTML = [];
  var totalCookies = 0;
  for (var i = 0; i < arrOfTimes.length; i++) {
    arrOfCookiesHTML.push('<li>' + arrOfTimes[i] + ': ' + arrOfCookies[i] + '</li>');
    totalCookies += arrOfCookies[i];
  }

  console.log(arrOfCookiesHTML);

  //Add total cookies to the end
  arrOfCookiesHTML.push('<li> total: ' + totalCookies + '</li>');

  var strOfCookiesHTML = arrOfCookiesHTML.join('');
  console.log(strOfCookiesHTML);

  //stuff str into ul
  docData.innerHTML = strOfCookiesHTML;
  console.log(docData);


  //Stick new element on the page
  document.getElementById('test').appendChild(docData);
} ;

//Create array of our objects and display them
var arrOfStores = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];
for (var i = 0; i < arrOfStores.length; i++) {

  dispShop(arrOfStores[i]);
}
