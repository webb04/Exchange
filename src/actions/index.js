export const setCurrentDomestic = (index) => {
  return {
    type: 'SET_CURRENT_DOMESTIC',
    index
  }
}

export const setCurrentForeign = (index) => {
  return {
    type: 'SET_CURRENT_FOREIGN',
    index
  }
}

export const amountUpdate = (value, index) => {
  return {
    type: 'UPDATE_AMOUNT',
    value,
    index
  }
}

export const updateConversion = (exchange) => {
  return {
    type: 'UPDATE_CONVERSION',
    exchange
  }
}
