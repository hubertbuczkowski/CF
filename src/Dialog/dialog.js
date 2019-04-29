import React from "react";
import style from "./dialog.module.css";
import Header from "./Header/header";
import Body from "./Body/body";
import Footer from "./Footer/footer"
import Spinner from "../Assets/spinner/spinner"

class Dialog extends React.Component {
  state = {code: [], active: 'locked', error: "", loading: false}

  //button is unlocked when code in body/inputCode has 6 digits. This allows to click verify code and perform verification
  changeButton(x, y){
    this.setState({error: ''})
    x ? this.setState({active: '', code: y}) : this.setState({active: 'locked', code: y})
  }

  //load spinner while data is loading
  loadSpinner(){
    if(this.state.loading)
    {
      return <Spinner text="Loading..." />
    }
  }

  //actions which will be performed after receiving code from server
  timeoutAction(x = "123456"){
    this.setState({loading: false})
    if(this.state.code.join('') === x)
    {
      this.props.process();
    }
    else{
      this.setState({code: ['','','','','',''], error: 'error'});
    }
  }

  //verify if code is equal to 123456 but this code can be sent in this plase to server and verified
  verifyCode(){
    this.setState({loading: true})
    
    setTimeout(() => this.timeoutAction(), 3000);
  }

  render() {
    return (
      <div className={style.main}>
        <div className={style.back}>
          {this.loadSpinner()}
          <Header/>
          <Body error={this.state.error} values={this.state.code} ifFull={this.changeButton.bind(this)} data={this.props.data}/>
          <Footer verifyCode={this.verifyCode.bind(this)} active={this.state.active} close={this.props.close}/>
        </div>
      </div>
    );
  }
}

Dialog.defaultProps = {
  close: () => console.log("Missing close function"),
  data: [],
  process: () => console.log("Missing process function")
}

export default Dialog;
