export interface Producto{
    desc: string,
    precio: number
}

const telefono:Producto = {
    desc: 'Nokia A1',
    precio: 2500
}

const tablet:Producto = {
    desc: 'Ipad Air',
    precio: 3200
}

// function calcularISV(productos:Producto[]):number {
//     let total = 0
//     for(const producto of productos){
//         total += producto.precio
//     }
//     return total*0.25
// }

// const articulos=[telefono,tablet]
// const isv = calcularISV(articulos)
// console.log("ISV: ", isv)

export function calcularISV(productos:Producto[]):[number,number] {
    let total = 0
    for(const producto of productos){
        total += producto.precio
    }
    return [total,total*0.15]
}

const articulos=[telefono,tablet]
const [total, isv] = calcularISV(articulos)
console.log("Total: ", total)
console.log("ISV: ", isv)