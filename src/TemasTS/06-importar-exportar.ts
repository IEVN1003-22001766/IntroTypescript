import {calcularISV} from "./05-desustructuracion-fun"
import type {Producto} from "./05-desustructuracion-fun"

const carrito:Producto[]=[
    {
        desc:"Telefono 1",
        precio: 1000
    },
    {
        desc:"Telefono 2",
        precio: 2000
    },
    {
        desc:"Telefono 3",
        precio: 3000
    }
]

const [total, isv] = calcularISV(carrito)
console.log("Total carrito: ",total)
console.log("ISV carrito: ",isv)