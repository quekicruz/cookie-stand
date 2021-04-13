'use strict';

// Needed 
// min/max customers and avg for cookies at each store 
// Different array for each store front
// 
console.log('I am Alive')


// object for seattle
const seattle = {
  name: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCook: 6.3,
  seattleArray: [],

  }

// object for tokyo
const tokyo = {
  name : 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCook: 1.2,
  tokyoArray: [],
}

// object for dubai
const dubai = {
  name : 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCook: 3.7,
  dubaiArray: [],
}

// object for paris
const paris = {
  name : 'Paris',
  minCustPerHour:  20,
  maxCustPerHour: 38,
  avgCook:  2.3,
  parisArray: [],
}

// object for lima
const lima = {
  name : 'Lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCook: 4.6,
  limaArray: [],
}

function cookieCounter(a,b,c) {
  let numofRandomCustomers = Math.floor(Math.random() * (b-a)) + a;
  // let avgCookiesPurchase = Math.floor(Math.random()) * (c + 1);
  let numberofCooks = Math.floor(c * numofRandomCustomers);
  return numberofCooks

}

// function for random customers
function randomCust(a, b) {
  let randomCustomers= Math.floor(Math.random() * (b - a +1) + a);
  return randomCustomers;

}

// function for avgcookies 
// 
function cooksAvg(min,max){
  return Math.floor(Math.random() * (max - min +1) + min)
}

// Array for hours of operation
const hoursofopArray = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

// Array for stores 
const storeArray = [seattle, tokyo, dubai, paris, lima]
console.log(storeArray.length)

// get element storeFronts
const storeFronts = document.getElementById("storeFronts");

// create article element
for (let s = 0; s < storeArray.length; s++){ 
  const article = document.createElement('article')
  let storeNow = storeArray[s];

  const h3Elem = document.createElement('h3');
  h3Elem.textContent = storeNow.name;
  article.appendChild(h3Elem);
  storeFronts.appendChild(article);

  
  const ulElem = document.createElement('ul')
  article.appendChild(ulElem)
  
  
  for (let h = 0; h < hoursofopArray.length; h++) {
    let hoursNow = hoursofopArray[h];
    const liElem = document.createElement('li');
    liElem.textContent = `${hoursNow}: ${cookieCounter(storeNow.minCustPerHour, storeNow.maxCustPerHour, storeNow.avgCook)} cookies`;
    ulElem.appendChild(liElem)
  
  }
  
}



// customersPerHourCounter: function() {
//   // for (let i = 0; i < hoursofopArray.length; i++) {
//     return this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour +1) + this.minCustPerHour));
//   // }
// },
// // loop through hours of operation for each hour get a random customer number and multiply that by average cookie sale push into number of cookies array

// cookieCounter: function() {
//   // totaldailycookies = 0
//   // write for loop here
//   // attach line 68 to a variable

//   this.customersPerHourCounter()
//   // multiply the results of customers per hour by average cookie

//   let solution = Math.floor(c * randomCustomers);
//   // totalDailyCookies += solution
//   for (let i = 0; i < hoursofopArray.length; i++ ) {
  
//   }
//   // console.log(solution);
//   // this.numberofCooks.push(solution);
//   // console.log(this.numberofCooks);
//   // return numberofCooks;
// },

// }


