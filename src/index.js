import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency';

function getCurrency(USD, otherCurr) {
  Currency.getCurrency(USD, otherCurr)
  .then(function(response) {
    if (response.conversion_rates) {
      convert(response,USD, otherCurr)
    } else {
      printError(response)
    }
  })
}




// UI logic
function convert(response, USD, otherCurr) {
  const rates = response.conversion.rates
  const conversion = rates[otherCurr] * USD;
  console.log(conversion)
  if (conversion === undefined) {
throw new Error ("We couldnt get the amount.")

}

function printError(error) {
  document.getElementById ("showResponse").innerText `There was an error accessing the currencey rate data: ${error}.`;
}
  
function handleForm(event) {
event.preventDefault()
const USD = document.getElementById("Currency").value;
const otherCurr = document.getElementById("otherCurrency").value;
document.getElementById("usdCurr").value = null;
document.getElementById("otherCurr").value = null;
getCurrency(USD, otherCurr);
}

window.addEventListener("load", function()  {
  document.querySelector("form").addEventListener("submit", handleForm)
})
