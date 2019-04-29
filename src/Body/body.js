import React from "react";
import Left from "./LeftBox/leftBox";
import Right from "./RightBox/rightBox";
import style from "./body.module.css"

class Body extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <Left key={1} data={this.props.data.left} steps={this.props.steps} done={this.props.done} changeDialog={this.props.changeDialog} className={style.left}/>
        <Right key={2} data={this.props.data.right} className={style.right}/>
      </div>
    );
  }
}

export default Body;
