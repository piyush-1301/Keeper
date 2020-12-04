import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="jumbotron" style={{backgroundColor:"#f5ba13", padding:"16px 32px"}}>
      <h1>
      <HighlightIcon />
      Keeper
      </h1>
    </div>
    
  );
}

export default Header;
