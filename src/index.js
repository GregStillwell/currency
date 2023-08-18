import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currency from './currency';

function getCurrency(USD, otherCurr) {
  currency.getCurrency(USD, otherCurr)
  .then(function(response) {
    if (response.conversion_rates) {
      
    }
  }
}
