function sumar(a:number, b:number):void {
    let resultado = a+b
    console.log(resultado)
}

sumar(3,5)

function potencia(x:number, y:number):number {
    let resultado = x**y
    return resultado
}

console.log(potencia(8,2))

// Parametros funcionales

function multiplicar(n1:number=8, n2:number=2):number {
    return n1*n2
}

console.log(multiplicar())
console.log(multiplicar(4))
console.log(multiplicar(6,5))

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrarEdad:()=>void
}

function mostrarMascota(mascota:Mascotas, x:number):void {
    mascota.edad = x;
    console.log(mascota)
    console.log(mascota.mostrarEdad())
}

const nuevaMascota:Mascotas = {
    nombre: "Firulais",
    edad: 5,
    raza: "Pastor Aleman",
    vacunado: true,
    mostrarEdad(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`)
    }
}

mostrarMascota(nuevaMascota,3)