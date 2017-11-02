import { connect } from 'react-redux'
import { updateConversion } from '../actions'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    currencies: state.currency.currencies,
    domesticView: state.currency.domesticView,
    domesticValue: state.currency.domesticValue,
    foreignView: state.currency.foreignView,
    foreignValue: state.currency.foreignValue,
    base: state.currency.base,
    rates: state.currency.rates,
    balance: [58.33, 66.75, 77.51]  // assume this to be fetched from a Database [GB, EUR, USD]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetch: (exchange) => {
      dispatch(updateConversion(exchange))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
