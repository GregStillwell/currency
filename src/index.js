import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './Currency';

function getCurrency(USD, otherCurr) {
  Currency.getCurrency(USD, otherCurr)
  .then(function(response) {
    if (response.conversion_rates) {
      convert(USD, otherCurr)
    } else {
      printError(response)
    }
  })
}




// UI logic
function
  
