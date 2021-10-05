import React from "react";
import carrito from './img/iconos/bx-cart.svg'
function Car(){
    return(
        <div>
            <img src={carrito}></img>
            <span class="badge badge-pill">5</span>
        </div>
    );
}
export default Car;