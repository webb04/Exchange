import React from 'react'
import DomesticCurrencyInput from '../containers/DomesticCurrencyInput'
import ForeignCurrencyInput from '../containers/ForeignCurrencyInput'
import TopBar from './TopBar'

class App extends React.Component {
  getRates() {
    const { onFetch, base } = this.props;
    if (!base) return;
    fetch(`http://api.fixer.io/latest?base=${base}`)
      .then((resp) => resp.json())
      .then(resp => onFetch(resp));
  }

  componentDidMount() {
    this.getRates();
    setInterval(() => {
      this.getRates();
    }, 10000);
  }

  render() {
    const { base, rates, balance, foreignView, currencies, domesticValue } = this.props;
    return (
      <div className="App">
        <TopBar base={base} rates={rates} foreignView={foreignView} currencies={currencies} domesticValue={domesticValue}/>
        <DomesticCurrencyInput base={base} rates={rates} balance={balance}/>
        <ForeignCurrencyInput base={base} rates={rates} balance={balance}/>
      </div>
    );
  }
}

export default App
