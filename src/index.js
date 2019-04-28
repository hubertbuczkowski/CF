import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/header";
import Body from "./Body/body";
import Dialog from "./Dialog/dialog"
import Spinner from "./Assets/spinner/spinner"
import './Assets/style.css';

let steps = ["Transaction info", "Recipient info", "Make payment"];
let done = 1;

let element = {
  left: [
    {
      label: "YOU SEND", 
      amount: "2000",
      currency: "EUR",
      selected: "selected",
      flag: "https://restcountries.eu/data/irl.svg"
    },
    {
      label:"Receiver Gets",
      amount:"1717.94",
      currency:"GBP",
      flag:"https://restcountries.eu/data/gbr.svg"
    }
  ],
  right:  {
    senderTitle: [{title:"Sending Details", value: null}],
    sender: [{title: "You send", value: 2000, last:"last", currency: "EUR"}],
    receiverTitle: [{title: "Receiving Details", value: `As of right now `}],
    receiver: [{title:"Rate", value: 0.86022}, {title:"Fee", value: "2.50", currency: "GBP"}, {title:"Delivery date", value: "25th November"}, {title:"Recipient gets", value: 1717.94, last:"last", currency: "GBP"},],
    footer: [{title:"You Save £66.19 compared to your bank!", value: null}]
  }
}

let data={
  prefix: "+353",
  number: "872251177"
}


class App extends React.Component {
  state = {showDialog: false, loading: true }

  componentDidMount(){
    setTimeout(() => this.loadData(), 2000);
  }

  loadData(){
    this.setState({loading: false})
  }

  changeDialog(){
    this.setState({showDialog: !this.state.showDialog})
  }

  renderComonents(){
    if(this.state.loading){
      return <Spinner text="Loading..." />
    }else{
      return(
        [
          this.state.showDialog ? <Dialog close={this.changeDialog.bind(this)} data={data}/> : null,
          <Body data={element} steps={steps} done={done} changeDialog={this.changeDialog.bind(this)}/>
        ]
      )
    }
    
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderComonents()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
