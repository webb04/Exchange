const currency = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_DOMESTIC':
      return Object.assign({}, state, { domesticView: action.index }, { value: `-` })
    case 'SET_CURRENT_FOREIGN':
      return Object.assign({}, state, { foreignView: action.index }, { value: `-` })
    case 'UPDATE_AMOUNT':
      return Object.assign({}, state, { [action.index]: `-${action.value.replace('-', '')}` })
    case 'UPDATE_CONVERSION':
      return Object.assign({}, state, { base: action.exchange.base, rates: action.exchange.rates })
    default:
      return {
        currency: '£',
        currencies: ['GBP', 'EUR', 'USD'],
        domesticView: 0,
        foreignView: 0,
        domesticValue: '-',
        foreignValue: 0,
        rates: {},
        base: 'USD'
      }
  }
}

export default currency
