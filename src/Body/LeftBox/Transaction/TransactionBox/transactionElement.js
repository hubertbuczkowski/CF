import React from "react";
import style from "./transactionElement.module.css"
import Currency from "./Currency/currency"



class TransactionElement extends React.Component {
   
   moneyFormatter(x){
      return new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: this.props.currency,
         minimumFractionDigits: 2
       }).format(x);
   }
   
	render() {
		return (
		   <div className={`${style.main}  ${this.props.selected ? style.selected : null}`}>
		      <div className={style.left}>
				   <div className={`${style.top} ${this.props.selected ? style.selected : null}`}>
				      {this.props.label.toUpperCase()}
				   </div>
               <div className={`${style.bottom} ${this.props.selected ? style.selected : null}`}>
                  {this.moneyFormatter(this.props.amount)}
               </div>
            </div>
            <div className={style.right}>
               <Currency currency={this.props.currency} flag={this.props.flag} selected={this.props.selected}/>
            </div>
         </div>
      );
   }
}

export default TransactionElement;
