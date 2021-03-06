import React from "react";
import style from "./transactionElement.module.css"
import Currency from "./Currency/currency"

class TransactionElement extends React.Component {
   
   //format money depending on what currency was transfered and display proper formating in transaction box
   moneyFormatter(x){
      return new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: this.props.data.currency,
         minimumFractionDigits: 2
       }).format(x);
   }
   
	render() {
		return (
		   <div className={`${style.main}  ${this.props.data.selected ? style.selected : null}`}>
		      <div className={style.left}>
				   <div className={`${style.top} ${this.props.data.selected ? style.selected : null}`}>
				      {this.props.data.label.toUpperCase()}
				   </div>
               <div className={`${style.bottom} ${this.props.data.selected ? style.selected : null}`}>
                  {this.moneyFormatter(this.props.data.amount)}
               </div>
            </div>
            <div className={style.right}>
               <Currency currency={this.props.data.currency} flag={this.props.data.flag} selected={this.props.data.selected}/>
            </div>
         </div>
      );
   }
}

TransactionElement.defaultProps = {
   data: {selected: '', label: "missing label", amount: '0', currency: 'EUR', flag: ''}
}
export default TransactionElement;
