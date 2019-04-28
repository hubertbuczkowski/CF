import React from "react";
import style from "./dialog.module.css";
import Header from "./Header/header";
import Body from "./Body/body";
import Footer from "./Footer/footer"

class Dialog extends React.Component {
  state = {code: [], active: 'locked'}

  changeButton(x){
    x ? this.setState({active: ''}) : this.setState({active: 'locked'})
  }

  render() {
    return (
      <div className={style.main}>
        <div className={style.back}>
          <Header/>
          <Body ifFull={this.changeButton.bind(this)} data={this.props.data}/>
          <Footer active={this.state.active} close={this.props.close}/>
        </div>
      </div>
    );
  }
}

export default Dialog;
