import React from "react";
import style from "./currency.module.css"


class Currency extends React.Component {
   
    render() {
        return (
            <div className={`${style.main} ${this.props.selected}`}>
                <div className={style.left}>
                    <img src={this.props.flag}/>
                </div>
                <div className={style.right}>
                    {this.props.currency}
                </div>
            </div>
        );
    }
}

export default Currency;
