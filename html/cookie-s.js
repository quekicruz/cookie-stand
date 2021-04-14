'use strict';

// Array for hours of operation
const hoursOfOperationArray = ['6:00am', '7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

// Constructor function for SalmonCookieStores
function SalmonCookieStores(name,minCustomersPerHour,maxCustomersPerHour,averageCookieSale,) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookieSale = averageCookieSale;
  this.numberofRandomCustomers = function (){
    let numberofRandomCustomers = Math.floor(Math.random()) * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + minCustomersPerHour;
    return numberofRandomCustomers;
  }
}


let seattle = new SalmonCookieStores ('Seattle', 23 , 65 , 6.3);
let tokyo = new SalmonCookieStores('Tokyo', 3 , 24, 1.2);
let dubai = new SalmonCookieStores('Dubai', 11 , 38 , 3.7);
let paris = new SalmonCookieStores('Paris', 20 , 38 , 2.3);
let lima = new SalmonCookieStores('Lima', 2 , 16 , 4.6);


// Array for different Salmon Cookie Stores
  const salmonCookieStoreArray = [seattle,tokyo,dubai,paris,lima];


  // Function for sales for each location
  function generateSalesArray(SalmonCookieStores) {
    SalmonCookieStores.grandTotal = 0;
    SalmonCookieStores.hourlySalesArray = [];
    for (let h = 0; h < hoursOfOperationArray.length; h++) {
      let customers = SalmonCookieStores.numberofRandomCustomers();
      let salmonCookiesSold = Math.floor(customers * SalmonCookieStores.averageCookieSale);
      SalmonCookieStores.grandTotal += salmonCookiesSold; 
      SalmonCookieStores.hourlySalesArray.push(salmonCookiesSold);
    }
  }

  for (let s = 0; s < salmonCookieStoreArray.length; s++) { let SalmonCookieStores = salmonCookieStoreArray[s]; generateSalesArray(SalmonCookieStores);
  }


const storeFronts = document.getElementById('storeFronts');

const articleElem = document.createElement('article');
storeFronts.appendChild(articleElem);

const tableElem = document.createElement('table');
articleElem.appendChild(tableElem);


const trElem = document.createElement('tr');
tableElem.appendChild(trElem);

// function for th element 
for (let i = -1; i < hoursOfOperationArray.length; i++) {
  const thElem = document.createElement("th");
  if (i === -1) {

    thElem.textContent = ` `;
    trElem.appendChild(thElem);

  } else if (i === hoursOfOperationArray.length) {

    thElem.textContent = `Totals`;
    trElem.appendChild(thElem);

  } else if (i < hoursOfOperationArray.length) {

    let currentHour = hoursOfOperationArray[i];
    thElem.textContent = `${currentHour}`;
    trElem.appendChild(thElem);
  }
 
}

for (let q =0; q < salmonCookieStoreArray.length; q++) {

  let currentStore = salmonCookieStoreArray[q];

  const trElem1 = document.createElement('tr');
  tableElem.appendChild(trElem1);

  for (let i = -1; i < hoursOfOperationArray.length; i++) {
    if (i === -1) {
      const tdElem = document.createElement('td');
      tdElem.textContent = `${currentStore.name}`;
      trElem1.appendChild(tdElem);
 } else if (i >= 0) {

  let currentHourSales = currentStore.hourlySalesArray[i];

  const tdElem = document.createElement ('td');
  tdElem.textContent = `${currentHourSales}`;
  trElem1.appendChild(tdElem);
 }
}
}


