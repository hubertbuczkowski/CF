import React from "react";
import Steps from "./Steps/steps";
import Transation from "./Transaction/transaction";
import Button from "./Button/button";
import Footer from "./Footer/footer";




class LeftBox extends React.Component {

  ifMobile(){
    if(this.props.children)
    {
      return this.props.children;
    }
  }

  render() {
    return (
    <div className={this.props.className}>
      <Steps steps={this.props.steps} done={this.props.done}/>
      <Transation data={this.props.data}/>
      { this.ifMobile() }
      <Button onClick={this.props.changeDialog} text="Next"/>
      <Footer />
    </div>
    );
  }
}

export default LeftBox;
