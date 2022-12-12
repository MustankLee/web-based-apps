import { Component } from "react";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="logo">
          <img src={Logo} alt="Logo"></img>
        </div>
        <ul className="nav-menu fn-reg-bold">
          <Link to="/" className="list"><li>Home</li></Link>
          <Link to="/add_menu" className="list"><li>Add Data</li></Link>
          <Link to="/edit_menu" className="list"><li>Edit Data</li></Link>
          <Link to="/detail_menu" className="list"><li>Detail Data</li></Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
