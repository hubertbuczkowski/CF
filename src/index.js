import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/header";
import Body from "./Body/body";
import Dialog from "./Dialog/dialog"
import './Assets/style.css';


class App extends React.Component {
  state = {showDialog: false }

  changeDialog(){
    this.setState({showDialog: !this.state.showDialog})
  }

  render() {
    return (
      <div>
        {this.state.showDialog ? <Dialog close={this.changeDialog.bind(this)} /> : null }
        <Header />
        <Body changeDialog={this.changeDialog.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
