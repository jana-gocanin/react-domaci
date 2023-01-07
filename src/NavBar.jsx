import React from "react";
import { FaDog } from "react-icons/fa";

function NavBar() {
    return (
        <div className="navBar">
            <a>My dog shelter</a>
            <a className="cart-items">
                <FaDog style={{ marginLeft: 10 }} />
                <div className="cart-num">0</div>
            </a>
        </div>
    )
}

export default NavBar