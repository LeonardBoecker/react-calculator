import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    button: [
      { value: 'allClear', className: 'button-style', id:"allClear", name: 'AC' },
      { value: 'delete', className: 'button-style', id:"del", name: 'DEL' },
      { value: 'percent', className: 'button-style', id:"percent", name: '%' },
      { value: 'power', className: 'button-style', id:"power", name: 'x^' },
      { value: 7, name: '7', className: 'button-style number' },
      { value: 8, name: '8', className: 'button-style number' },
      { value: 9, name: '9', className: 'button-style number' },
      { value: "divide", className: 'button-style', id:"divide", name: '/' },
      { value: 6, name: '6' , className: 'button-style number'},
      { value: 5, name: '5', className: 'button-style number' },
      { value: 4, name: '4', className: 'button-style number' },
      { value: "multi", name: '*', className: 'button-style', id: 'multi' },
      { value: 1, name: '1', className: 'button-style number' },
      { value: 2, name: '2', className: 'button-style number' },
      { value: 3, name: '3', className: 'button-style number' },
      { value: "minus", name: '-', operation: '-', className: 'button-style', id:"minus" },
      { value: 0, name: '0' , className: 'button-style number'},
      { value: 'dot', name: '.', className: 'button-style' },
      { value: "equal", name: '=', className: 'button-style', id:"equal"},
      { value: "plus", name: '+', operation: '+' , className: 'button-style', id:"plus"}
    ],
    otherObject: 'otherone'

  }
  // addNumberHandler = (event) => {

  //   const buttonIndex = this.state.button.findIndex(buttonss => {
  //     return buttonss.name === event;
  //   });
  //   const buttons = { ...this.state.button[buttonIndex] };


  // }


  render() {

    const button = this.state.button.map(buttons => {
      return <button
        value={buttons.value}
        // onClick={() => this.addNumberHandler(buttons.name)}
        key={buttons.name}
        className={buttons.className}
        id={buttons.id}
        data-operation={buttons.operation}>{buttons.name}</button>
    });

    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>My React<br />Calculater</h1>
        <div className="container">
          <div id="calculater">
            <div id="result-display">
              <div id="prevTyped-div">
                <p id="prevTyped">9*15,4585</p>
              </div>
              <div id="currentTyping-div">
                <p id="currentTyping">1524458</p>
              </div>

            </div>
            <div id="buttons">
              {button}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
