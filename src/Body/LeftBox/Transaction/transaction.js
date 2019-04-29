import React from "react";
import TransactionBox from "./TransactionBox/transactionBox"
import style from "./transaction.module.css"

class Transaction extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <h4>Let's set up your transaction!</h4>
        <div className={style.desc}>Specify the amount to be sent or received.</div>
        <TransactionBox data={this.props.data} />
      </div>
    );
  }
}

Transaction.defaultProps = {
  data: []
}

export default Transaction;
