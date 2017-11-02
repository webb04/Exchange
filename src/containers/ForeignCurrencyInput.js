import { connect } from 'react-redux'
import { setCurrentForeign } from '../actions'
import SwipeView from '../components/SwipeView'

const mapStateToProps = (state, ownProps) => {
  return {
    currencies: state.currency.currencies,
    className: 'foreignCurrency',
    view: state.currency.foreignView,
    domesticValue: state.currency.domesticValue,
    balance: ownProps.balance,
    base: ownProps.base,
    rates: ownProps.rates
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSwipe: (index, indexLatest) => {
      dispatch(setCurrentForeign(index))
    },
    onPaginationSelect: (index) => {
      dispatch(setCurrentForeign(index))
    }
  }
}

const ForeignCurrencyInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeView)

export default ForeignCurrencyInput
