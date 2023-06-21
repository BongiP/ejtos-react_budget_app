import React, { useState } from 'react';

function CurrencyConverter() {
  const [selectedCurrency, setSelectedCurrency] = useState('$');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const currencyOptions = [
    { value: '$', label: 'Dollar' },
    { value: '£', label: 'Pound' },
    { value: '€', label: 'Euro' },
    { value: '₹', label: 'Rupee' },
  ];

  return (
    <div>
      <h2>Currency Converter</h2>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        {currencyOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected currency: {selectedCurrency}</p>
    </div>
  );
}

export default CurrencyConverter;