import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <p>Copyright ⓒ {year}</p>
  </footer>
  );
}

export default Footer;





// <div class="card-footer text-muted" style={{display:"block",bottom:"0"}}>
// Copyright ⓒ {year}
// </div>