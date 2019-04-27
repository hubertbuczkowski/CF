import React from "react";
import Left from "./LeftBox/leftBox";
import Right from "./RightBox/rightBox";
import style from "./body.module.css"

class Body extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <Left changeDialog={this.props.changeDialog} className={style.left}/>
        <Right className={style.right}/>
      </div>
    );
  }
}

export default Body;
