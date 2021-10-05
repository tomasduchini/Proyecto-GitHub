import { render } from "@testing-library/react";
import React,{component, useState} from "react";
import Item from "./Item";
function getItems() {
    const items = [{index: 0, nombre:"Producto1", stock: 4, descripcion: "Este es el producto 1", precio:"$"+1000, imagen:"https://w7.pngwing.com/pngs/99/974/png-transparent-shooting-target-target-corporation-bullseye-darts-symmetry-darts-sports.png"},
                   {index: 1, nombre:"Producto2", stock: 8, descripcion: "Este es el producto 2", precio:"$"+1500, imagen:"https://w7.pngwing.com/pngs/99/974/png-transparent-shooting-target-target-corporation-bullseye-darts-symmetry-darts-sports.png"},
                   {index: 2, nombre:"Producto3", stock: 1, descripcion: "Este es el producto 3", precio:"$"+1350, imagen:"https://w7.pngwing.com/pngs/99/974/png-transparent-shooting-target-target-corporation-bullseye-darts-symmetry-darts-sports.png"},
                   {index: 3, nombre:"Producto4", stock: 2, descripcion: "Este es el producto 4", precio:"$"+900, imagen:"https://w7.pngwing.com/pngs/99/974/png-transparent-shooting-target-target-corporation-bullseye-darts-symmetry-darts-sports.png"}];
    return items;
  }
function ItemList (){
    let items = getItems();
    return<>
        <div class="cards" id={items.index}>
            {items.map((item) => (<Item item={item} />))}
        </div>
    </>
};

export default ItemList;