import React from "react";
import style from "./dialog.module.css";
import Header from "./Header/header";
import Body from "./Body/body";
import Footer from "./Footer/footer"

class Dialog extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.back}>
          <Header/>
          <Body/>
          <Footer close={this.props.close}/>
        </div>
      </div>
    );
  }
}

export default Dialog;
