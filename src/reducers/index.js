import { combineReducers } from 'redux'
import currency from './currency'

const exchangeApp = combineReducers({ currency })

export default exchangeApp
