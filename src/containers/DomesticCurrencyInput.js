import { connect } from 'react-redux'
import { setCurrentDomestic, amountUpdate, updateConversion } from '../actions'
import SwipeView from '../components/SwipeView'

const mapStateToProps = (state, ownProps) => {
  return {
    currencies: state.currency.currencies,
    className: 'domesticCurrency',
    view: state.currency.domesticView,
    domesticValue: state.currency.domesticValue,
    balance: ownProps.balance,
    base: ownProps.base,
    rates: ownProps.rates
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSwipe: (index, indexLatest, currencies) => {
      dispatch(setCurrentDomestic(index))
      fetch(`http://api.fixer.io/latest?base=${currencies[index]}`)
        .then((resp) => resp.json())
        .then(resp => dispatch(updateConversion(resp)));
    },
    onPaginationSelect: (index, currencies) => {
      dispatch(setCurrentDomestic(index))
      fetch(`http://api.fixer.io/latest?base=${currencies[index]}`)
        .then((resp) => resp.json())
        .then(resp => dispatch(updateConversion(resp)));
    },
    onInputChange: (e) => {
      dispatch(amountUpdate(e.target.value, 'domesticValue'))
    }
  }
}

const DomesticCurrencyInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeView)

export default DomesticCurrencyInput
