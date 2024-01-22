window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // create an object variable with the alias as "values" set it to the amount: 10,000, years: 10, rate: 4.5
  // get the element "loan-amount" (it is an id) set the alias to amountUI
  // set the value of amountUI to values amount
  // get the loan-years id and create an alias "yearsUI"
  // set the yearsUI value to values year
  // get the loan-rate id and create a convient alias "rateUI"
  // set the rateUI value to values rate
  // update()
  let values = { amount: 10000, years: 10, rate: 4.5 }
  let amountUI = document.querySelector("#loan-amount")
  amountUI = values.amount
  let yearsUI = document.querySelector("#loan-years")
  yearsUI = values.years
  let rateUI = document.querySelector("#loan-rate")
  rateUI = values.rate
  update()
}





// Get the current values from the UI
// Update the monthly payment
function update() {
  // create an alias "currentUIValues and set it eqaul to getCurrentUIValues()
  // give updateMonthly the parameter of calculateMonthlyPayment at currentUIValues
  let currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues))
}





// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // create an alias "monthlyRate" set it equal to (values.rate / 100) / 12
  // create an alias "n" round values.years / 12 to the highest integer
  // return (
  // (monthlyRate * values.amount)
  // /
  // (1 - Math.pow((1 + monthlyRate), -n))
  // ).toFixed(2)
  let monthlyRate = (values.rate / 100) / 12
  let n = Math.floor(values.years * 12)
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2)
} 





// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  // get the id "monthly-payment"
  // set monthlyUI innerText to "$" + monthly
  let monthlyUI = document.querySelector("#monthly-payment")
  monthlyUI.innerText = "$" + monthly
}
