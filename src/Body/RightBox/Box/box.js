import React from "react";
import style from "./box.module.css"
import Element from "./Element/element"

class Box extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <Element  pass={this.props.data.senderTitle} type="title"/>
        <div className={style.spacer}/>
        <Element  pass={this.props.data.sender}/>
        <div className={style.spacer}/>
        <Element  pass={this.props.data.receiverTitle} type="title"/>
        <div className={style.spacer}/>
        <Element  pass={this.props.data.receiver}/>
        <div className={style.spacer}/>
        <Element  pass={this.props.data.footer} type="total"/>
      </div>
    );
  }
}

Box.defaultProps = {
  data: []
}

export default Box;
