import React, { Component } from 'react';
import ShoppingCartItems from './ShoppingCartItems';
import ShoppingCartTotal from './ShoppingCartTotal';

export default class ShoppingCartDisplay extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <ShoppingCartItems 
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat} />
        <ShoppingCartTotal 
          selected={this.props.selected} 
          USCurrencyFormat={USCurrencyFormat}/>
      </section>
    )
  }
}