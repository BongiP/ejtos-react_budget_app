import React, { useState } from 'react';
import AllocationForm from './AllocationForm';

const CurrencySelector = ({ setCurrency }) => {
  const [currency, setCurrencyState] = useState('£');

const handleCurrencyChange = (event) => {
    setCurrencyState(event.target.value);
    setCurrency(event.target.value);
  };

  return (
    <div>
      <label htmlFor="currency" style={{ color: 'green' }}>Select currency:</label>
      <select id="currency" value={currency} onChange={handleCurrencyChange} style={{ backgroundColor: 'lightgreen' }}>
        <option value="£">£ Pounds</option>
        <option value="$">$ Dollars</option>
        <option value="€">€ Euros</option>
        <option value="₹">₹ Rupees</option>
      </select>
      {/* Pass currency state to AllocationForm component as prop */}
      <AllocationForm currency={currency} />
      {/* Pass handleCurrencyChange function to CurrencySelector component as prop */}
      <CurrencySelector onCurrencyChange={handleCurrencyChange} />
    </div>
     
  );
};

export default CurrencySelector;