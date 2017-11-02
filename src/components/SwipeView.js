import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import symbols from '../utils/index.js'

const styles = {
  height: '100%',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  width: '80%',
  margin: 'auto'
};

const renderPagination = (currencies, view, onPaginationSelect, className) => {
  const paginationStyle = `${className}-pagination`;
  return <div className={paginationStyle}>
      {
        [0,1,2].map(index => {
          return (index === view)
            ? <div className="selected" key={`pagination-${index}`}></div>
            : <div className="unselected" key={`pagination-${index}`} onClick={ () => { onPaginationSelect(index, currencies) } }></div>
        })
      }
    </div>
}

const SwipeView = ({ onSwipe, currencies, className, domesticValue, view, onInputChange, onPaginationSelect, balance, rates }) => {
  const rate = rates && rates[currencies[view]] ? rates[currencies[view]] : 1;
  const domesticValueFloat = domesticValue ? parseFloat(domesticValue.replace('-', '')) : 0;
  return (
    <div className={className}>
      <SwipeableViews index={view} enableMouseEvents={true} onChangeIndex={ (index, indexLatest) => onSwipe(index, indexLatest, currencies) }>
        {
          currencies ?
            currencies.map((currency, index) => {
              return (
                <div style={styles} key={index}>
                  <div className="currency">
                    <h1>{ currency }</h1>
                    <p>You have { symbols[currencies[view]] }{ (balance[view] * rate).toFixed(2) }</p>
                  </div>
                  {
                    className === 'domesticCurrency'
                      ? <div><input id={`input-${index}`} type="text" autoFocus value={domesticValue} onChange={onInputChange}></input></div>
                      : <div className="foreignAmount">{ domesticValueFloat ? `+${(domesticValueFloat * rate).toFixed(2)}` : null }</div>
                  }
                </div>
              )
            })
          : null
        }
      </SwipeableViews>
      { renderPagination(currencies, view, onPaginationSelect, className) }
    </div>
)};

export default SwipeView;
