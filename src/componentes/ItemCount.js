import React, { Component, useState } from 'react';

const Item = () => {
    const [contador, setContador] = useState(1);
    const [stock, setStock] =useState(7);
    
    return(
        <div class="contador">
            <button onClick={() => contador<stock ? setContador(contador+1) : setContador(contador)}>+</button>
            <h1>{contador}</h1>
            <button onClick={() => contador>1 ? setContador(contador-1) : setContador(1)}>-</button>
        </div>
    );
}

export default Item;