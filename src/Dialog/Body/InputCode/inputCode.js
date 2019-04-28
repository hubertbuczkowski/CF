import React from "react";
import style from "./inputCode.module.css";

function validate(){

}

class InputCode extends React.Component {
  state = { values: [], focus: [1,0,0,0,0,0]
  }

  componentDidMount()
  {

  }

  unlockButton(){
    if(this.state.values.join('').length === 6)
    {
      this.props.ifFull(true);
    }
    else
    {
      this.props.ifFull(false);
    }
  }

  valueChange(x){
    let values = this.state.values;
    let id = parseInt(x.target.id);
    let value = x.target.value;
    if(!isNaN(value) && value !== " " && value.length < 2)
    {
      values[id] = x.target.value
      if(value !== "")
      {
        if(x.currentTarget.nextElementSibling){
          x.currentTarget.nextElementSibling.focus()
        } else {
          x.currentTarget.blur();
        }
      }
      this.setState({values : values})
    }
    else{
      x.target.value = ''
    }
    this.unlockButton();
  }

  generateInputs()
  {
    let resp = [];
    for(let i=0; i<6; i++){
      if(i === 0){
        resp.push(<input autoFocus={this.state.focus[i]} onChange={(x) => this.valueChange(x)}  ref={i} id={i} value={this.state.values[i]}/>)
      } else {
        resp.push(<input autoFocus={this.state.focus[i]} onChange={(x) => this.valueChange(x)}  ref={i} id={i} value={this.state.values[i]}/>)
      }
    }
    return resp;
  }

  render() {
    return (
      <div className={style.main}>
        {this.generateInputs()}
      </div>
    );
  }
}

export default InputCode;
