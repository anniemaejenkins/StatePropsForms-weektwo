import React, { Component } from 'react';

import OrderItem from './OrderItem.js';

export default class Order extends Component{
  constructor(props){
    super(props);
    this._addTotal = this._addTotal.bind(this);
    this._addOrder = this._addOrder.bind(this);
  }

  _addOrder(event){
    event.preventDefault();
    let order = JSON.stringify(this.props.order);
    // console.log('listItem', listItem);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/reactthaiorderanniejenkins/", {
      method: "POST",
      body: order,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");
    }).catch(err => {
      console.log(err, "boo");
    });
  }

_addTotal(order){
  let total = this.props.order.items.reduce(function(acc, i) {
    return acc + Number(i.price)
  }, 0);
  return total;
}
  // this.props.order passes it down from the router
  render(){
    return(
      <div>
        <OrderItem  order={ this.props.order }/>
        { this._addTotal().toFixed(2) }
        <input type="button" value="add order" onClick={ this._addOrder } />
      </div>
    )
  }
}
