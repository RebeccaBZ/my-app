import {Component} from "react";
import "./CultureStyles.css";

class CultureValues extends Component{
    render(){
        return(
            <div className="culture-nm">
                <div className="culture1-desc"> 
                    <h2>{this.props.naming}</h2>
                    <p>{this.props.desc}</p>
                </div>

                <div className="culture1-img">
                    <img alt="Culture 1" src={this.props.imga}></img>
                </div>
            </div>
        )
    }
}

export default CultureValues;