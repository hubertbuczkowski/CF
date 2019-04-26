import React from "react";
import TransactionElement from "./transactionElement"
import style from "./transactionBox.module.css"

class TransactionBox extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <TransactionElement label="YOU SEND" amount="2000" currency="EUR" selected="selected" flag="https://restcountries.eu/data/irl.svg"/>
        <TransactionElement label="Receiver Gets" amount="1717.94" currency="GBP" flag="https://restcountries.eu/data/gbr.svg"/>
      </div>
    );
  }
}

export default TransactionBox;
