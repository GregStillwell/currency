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
  const conversion = rates + otherCurr * USD;
  console.log(conversion)
}
  
