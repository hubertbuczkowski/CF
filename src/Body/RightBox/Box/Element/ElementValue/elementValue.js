import React from "react";
import style from "./elementValue.module.css"

class ElementValue extends React.Component {
    state= {mainClass : null, secondDiv: null}
    
    moneyFormatter(x){
        return new Intl.NumberFormat('en-US', {
           style: 'currency',
           currency: this.props.currency,
           minimumFractionDigits: 2
         }).format(x);
     }

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

export default ElementValue;
