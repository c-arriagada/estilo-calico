import React from "react";

function Footer() {

    const currentYear = new Date;

    return (
        <div className="footer">
        <p className="copyright">©{currentYear.getFullYear()} Estilo Calico</p> 
       </div>
    )
}

export default Footer;