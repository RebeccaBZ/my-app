import "./NavbarStyles.css"
import {Component} from "react"
import { MenuItems } from "./MenuItems";

class Navbar extends Component{
    state = {clicked: false};
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">BMW
            <i>
                </i>
                </h1>

            <div className="menu-icons" onClick={
                this.handleClick
            }>
                <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
                {MenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                    <a className={item.cName} href="/">
                    <i className={item.icon}>{item.title}</i>
                    </a>
                

                </li>
                    )
                }
                )}
                
            </ul>
        </nav>
        )
    }
}

export default Navbar;