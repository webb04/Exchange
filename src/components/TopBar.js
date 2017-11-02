import React from 'react';
import symbols from '../utils/index.js'

const TopBar = ({ base, currencies, foreignView, rates, domesticValue }) => {
  const foreignCurrency = currencies[foreignView];
  const sameCurrency = symbols[base] === symbols[foreignCurrency];
  const exchangeState = (sameCurrency || !domesticValue || domesticValue === '-') ? 'inactive' : '';

  return (
    <div className="topBar">
      <span>Cancel</span>
      <span>{symbols[base]}1 = {symbols[foreignCurrency]}{sameCurrency ? 1 : rates[foreignCurrency]}</span>
      <span className={exchangeState}>Exchange</span>
    </div>
  )
};

export default TopBar;
