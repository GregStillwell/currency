import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currency from './currency';

function getCurrency(convert) {
  currency.getCurrency(convert)
  .then(response.conversion_rates)
}