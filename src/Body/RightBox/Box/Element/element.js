import React from "react";
import style from "./element.module.css"
import ElementValue from "./ElementValue/elementValue"

class Element extends React.Component {
    state= {mainClass : null, elements: []}

    //return elements for each piece of data
    returnElements(arr){
        let retVal = [];
        arr.forEach(element => {
            retVal.push(<ElementValue title={element.title} value={element.value} type={this.props.type} last={element.last} currency={element.currency}/>)
        });
        return retVal;
    }

    //Set all data elements and proper style 
    componentDidMount(){
        if(this.props.type)
        {
            this.setState({mainClass : `${style.main} ${style[this.props.type]}`})
        }
        else{
            this.setState({mainClass : `${style.main}`})
        }

        this.setState({elements: this.returnElements(this.props.pass)})
    }
  
    render() {
        return (
            <div className={this.state.mainClass}>
                {this.state.elements}
            </div>
        );
    }
}

Element.defaultProps = {
    pass: [],
    type: '',

}

export default Element;
