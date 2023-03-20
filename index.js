// Declare global variable customerName
var customerName = "bob";

// Define function upperCaseCustomerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Define function setBestCustomer
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Define function overwriteBestCustomer
function overwriteBestCustomer() {
  bestCustomer ='maybe bob';
}

// Declare global constant leastFavoriteCustomer
const leastFavoriteCustomer = "Karen";

// Define function changeLeastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  // Attempt to change the value of leastFavoriteCustomer
  leastFavoriteCustomer = "Susan"; 
}
