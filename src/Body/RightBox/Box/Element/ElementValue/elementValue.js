import React from "react";
import style from "./elementValue.module.css"

class ElementValue extends React.Component {
    state= {mainClass : null, secondDiv: null}
    
    //formats money according to passed currency
    moneyFormatter(x){
        return new Intl.NumberFormat('en-US', {
           style: 'currency',
           currency: this.props.currency,
           minimumFractionDigits: 2
         }).format(x);
     }
    
    //format value depending if currency was passed or not 
    //check if value was passed because if not, no value will be displayed
    componentDidMount(){
        if(this.props.value)
        {
            if(this.props.currency)
            {
                this.setState({secondDiv: <div className={`${style.right} ${style[this.props.type] || ''} ${style[this.props.last] || ''} `}>{this.moneyFormatter(this.props.value)}</div>})
            } else {
                this.setState({secondDiv: <div className={`${style.right} ${style[this.props.type] || ''} ${style[this.props.last] || ''} `}>{this.props.value}</div>})
            }
        }
    }
  
    render() {
        return (
            <div className={style.main}>
                <div className={`${style.left} ${style[this.props.type] || ''}`}>{this.props.title || ''}</div>
                {this.state.secondDiv}
            </div>
        );
    }
}

ElementValue.defaultProps = {
    type: '',
    title: "Missing Title",
    last: '',
    value: 0,
    currency: ''
}
export default ElementValue;
