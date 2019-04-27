import React from "react";
import style from "./box.module.css"
import Element from "./Element/element"
import { declareTypeAlias } from "@babel/types";

var pass = {
    senderTitle: [{title:"Sending Details", value: null}],
    sender: [{title: "You send", value: 2000, last:"last"}],
    receiverTitle: [{title: "Receiving Details", value: "As of right now ?"}],
    receiver: [{title:"Rate", value: 0.86022}, {title:"Fee", value: "2.50"}, {title:"Delivery date", value: "25th November"}, {title:"Recipient gets", value: 1717.94, last:"last"},],
    footer: [{title:"You Save 66.19 compared to your bank!", value: null}]
}

class Box extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <Element row="1" pass={pass.senderTitle} type="title"/>
        <div className={style.spacer}/>
        <Element row="2" pass={pass.sender}/>
        <div className={style.spacer}/>
        <Element row="3" pass={pass.receiverTitle} type="title"/>
        <div className={style.spacer}/>
        <Element row="4" pass={pass.receiver}/>
        <div className={style.spacer}/>
        <Element row="5" pass={pass.footer} type="total"/>
      </div>
    );
  }
}

export default Box;
