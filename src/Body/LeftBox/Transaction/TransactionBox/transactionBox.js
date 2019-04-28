import React from "react";
import TransactionElement from "./TransactionElement/transactionElement"
import style from "./transactionBox.module.css"



class TransactionBox extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <TransactionElement data={this.props.data[0]}/>
        <TransactionElement data={this.props.data[1]}/>
      </div>
    );
  }
}

export default TransactionBox;
