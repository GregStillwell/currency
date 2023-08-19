import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './Currency';

function getCurrency(response ,USD, otherCurr) {
  Currency.getCurrency(response, USD, otherCurr)
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
  
}
  
