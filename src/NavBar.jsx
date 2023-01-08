import React from "react";
import { FaDog } from "react-icons/fa";

function NavBar({cartNum}) {
    return (
        <div className="navBar">
            <a>Doniraj</a>
            <a className="cart-items">
                <FaDog style={{ marginLeft: 10 }} />
                <div className="cart-num">{cartNum}</div>
            </a>
        </div>
    )
}

export default NavBar