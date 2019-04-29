import React from "react";
import Loading from "../signs/loader"
import style from "./spinner.module.css"

//this is custom spinner which is displayed when data is loaded

class Spinner extends React.Component {

    state={rotate:0, interval: null, style: {}}

    //responsible for rotating spinner while loading
    incremementRotate(){
        let degree = this.state.rotate;

        if(degree === 359)
        {
            degree = 0
        } else {
            degree++
        }

        let style = {
            'msTransform': `rotate(${degree}deg)`, /* IE 9 */
            'WebkitTransform': `rotate(${degree}deg)`, /* Safari */
            'transform': `rotate(${degree}deg)`
        }

        this.setState({rotate: degree, style: style})
    }

    //set intervall which will rotate loading picture
    componentDidMount(){
        this.setState({interval: setInterval(this.incremementRotate.bind(this), 8)});
    }

    //clear interval when element is unmounted
    componentWillUnmount(){
        clearInterval(this.state.interval)
    }
   
    render() {
        return (
            <div className={style.main}>
                <div className={style.inner}>
                    <div className={style.spinner} style={this.state.style}><Loading className={style.spinnerImg}/></div>
                    <div className={style.text} >{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default Spinner;
