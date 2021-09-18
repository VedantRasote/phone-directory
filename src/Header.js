import React from "react";
import './Header.css';

const Header = (props) => {
  return (
    <div className="header">
      {props.heading}
    </div>
  );
}

// import React, {Component} from "react";
// class Header extends Component {
//     render(){
//         return(
//             <div className="header">
//                Phone Directory
//             </div>
//         )
//     }
// }

export default Header;