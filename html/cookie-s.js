'use strict';

// Array for hours of operation
const hoursOfOperationArray = ['6:00am ', '7:00am ','8:00am ','9:00am ','10:00am ' ,'11:00am ','12:00pm ','1:00pm ','2:00pm ','3:00pm ','4:00pm ','5:00pm ','6:00pm ','7:00pm '];
// Global function for form 


// Constructor function for SalmonCookieStores
function SalmonCookieStores(name,minCustomersPerHour,maxCustomersPerHour,averageCookieSale,) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookieSale = averageCookieSale;
  this.numberofRandomCustomers = function (){
    let numberofRandomCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
    return numberofRandomCustomers;
  }
}

// Variable description for all SalmonCookieStores 
let seattle = new SalmonCookieStores ('Seattle', 23 , 65 , 6.3);
let tokyo = new SalmonCookieStores('Tokyo', 3 , 24, 1.2);
let dubai = new SalmonCookieStores('Dubai', 11 , 38 , 3.7);
let paris = new SalmonCookieStores('Paris', 20 , 38 , 2.3);
let lima = new SalmonCookieStores('Lima', 2 , 16 , 4.6);



const storeFronts = document.getElementById('storeFronts');
const articleElem = document.createElement('article');
const tableElem = document.createElement('table');
const trElem = document.createElement('tr');


// Array for different Salmon Cookie Stores
const salmonCookieStoreArray = [seattle,tokyo,dubai,paris,lima];

const formElem = document.getElementById('newStoreInput');

// Function for sales for each location
function generateSalesArray(salmonCookieStores) {
  salmonCookieStores.grandTotal = 0;
  salmonCookieStores.hourlySalesArray = [];
    for (let h = 0; h < hoursOfOperationArray.length; h++) {
      let customers = salmonCookieStores.numberofRandomCustomers();
      let salmonCookiesSold = Math.floor(customers * salmonCookieStores.averageCookieSale);
      salmonCookieStores.grandTotal += salmonCookiesSold; 
      salmonCookieStores.hourlySalesArray.push(salmonCookiesSold);
    }
  }
  

  //for loop to call function at each location
  for (let s = 0; s < salmonCookieStoreArray.length; s++) {
    let SalmonCookieStores = salmonCookieStoreArray[s]; 
    generateSalesArray(SalmonCookieStores);
  }


  function renderHeader() {
    storeFronts.appendChild(articleElem);

    articleElem.appendChild(tableElem);

    tableElem.appendChild(trElem);
  
 
// function for th element 
for (let i = -1; i < hoursOfOperationArray.length + 1; i++) {
  const thElem = document.createElement("th");
  if (i === -1) {

    thElem.textContent = ` `;
    trElem.appendChild(thElem);

  } else if (i < hoursOfOperationArray.length) {

    let currentHour = hoursOfOperationArray[i];
    thElem.textContent = currentHour;
    trElem.appendChild(thElem);
    
    
  } else if (i === hoursOfOperationArray.length) {
    
    thElem.textContent = `Totals`;
    trElem.appendChild(thElem);
  }
}
}

function renderContent() {
// function to get cookies sold at each hour at each location 
for (let q = 0; q < salmonCookieStoreArray.length; q++) {

  let currentStore = salmonCookieStoreArray[q];

  let totalCookiesSold = currentStore.grandTotal;

  const trElem1 = document.createElement('tr');
  tableElem.appendChild(trElem1);

  for (let i = -1; i < hoursOfOperationArray.length + 1; i++) {
    if (i === -1) {

      const thElem = document.createElement('th');
      thElem.textContent = currentStore.name;
      trElem1.appendChild(thElem);

 } else if (i >= 0 && i < hoursOfOperationArray.length)  {

  let currentHourSales = currentStore.hourlySalesArray[i];

  const tdElem = document.createElement ('td');
  tdElem.textContent = currentHourSales;
  trElem1.appendChild(tdElem);
 }
 else if ( i === hoursOfOperationArray.length) {
   const tdElem = document.createElement ('td')
   tdElem.textContent = totalCookiesSold.grandTotal;
   trElem1.appendChild(tdElem);
  }

}
}
}
function renderFooter() {

  const trElem = document.createElement('tr')
  tableElem.appendChild(trElem);

  const thElem = document.createElement('th');
  thElem.textContent = 'Hourly Total'
  trElem.appendChild(thElem);

  let dailytotal = 0;

  // we are going to loop through the hours of operation
  for (let index = 0; index < hoursOfOperationArray.length; index ++) {
    let hourlytotal = 0;
    for (let index2 = 0; index2 < salmonCookieStoreArray.length; index2 ++){
      let currentstore = salmonCookieStoreArray [index2];
      let currenthourlysale = currentstore.hourlySalesArray [index];
      hourlytotal += currenthourlysale;
    }
    const tdElem = document.createElement('td')
    tdElem.textContent = hourlytotal
    trElem.appendChild(tdElem);

    dailytotal += hourlytotal
  }
  const tdElem2 = document.createElement('td')
  tdElem2.textContent = dailytotal
  trElem.appendChild(tdElem2);
  
}


//Handle function

function handleSubmit(event) {
  
  event.preventDefault();
  console.log(event.target.minCustomersPerHour.value);
  console.log(event.target.name.value);
  
  let name = event.target.name.value;
  let minCustomersPerHour = parseInt(event.target.minCustomersPerHour.value);
  let maxCustomersPerHour = parseInt(event.target.maxCustomersPerHour.value);
  let averageCookieSale = parseInt(event.target.value);
  
  let newStoreEntry = new SalmonCookieStores(name, minCustomersPerHour, maxCustomersPerHour, averageCookieSale);salmonCookieStoreArray.push(newStoreEntry);
  
  event.target.reset();
  
  tableElem.innerHTML = ' ';
  trElem.innerHTML = ` `;
  
  for (let s = 0; s < salmonCookieStoreArray.length; s++) {
    let salmonCookieStores = salmonCookieStoreArray[s]; 
    generateSalesArray(salmonCookieStores);
  }

// renderHeader();
// renderContent();
// renderFooter();
}

// Event Listener

formElem.addEventListener('submit', handleSubmit);

renderHeader();
renderContent();
renderFooter();

