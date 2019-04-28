import React from "react";
import style from "./currency.module.css"


class Currency extends React.Component {
   
    render() {
        return (
            <div className={`${style.main} ${style[this.props.selected]}`}>
                <div className={style.left}>
                    <img alt={this.props.currency} src={this.props.flag}/>
                </div>
                <div className={style.right}>
                    {this.props.currency}
                </div>
            </div>
        );
    }
}

export default Currency;
