import React from 'react';

const CurrencySelector = (props) => {
  return (
    <div>
      <label htmlFor="currency" style={{ color: 'green' }}>Select currency:</label>
      <select id="currency" value={props.currency} onChange={props.onCurrencyChange} style={{ backgroundColor: 'lightgreen' }}>
        <option value="£">£ Pounds</option>
        <option value="$">$ Dollars</option>
        <option value="€">€ Euros</option>
        <option value="₹">₹ Rupees</option>
      </select>
    </div>
  );
};

export default CurrencySelector;