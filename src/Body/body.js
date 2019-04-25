import React from "react";
import Left from "./LeftBox/leftbox";
import Right from "./RightBox/rightbox";
import style from "./body.module.css"

class Body extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <Left className={style.left}/>
        <Right className={style.right}/>
      </div>
    );
  }
}

export default Body;
