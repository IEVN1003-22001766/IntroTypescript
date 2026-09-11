class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(`Hola Mundo. Me llamo ${this.nombre}`)
        console.log(`Tengo ${this.edad} anios`)
    }
}

let persona:Persona;
persona = new Persona('Esteban', 22)
persona.imprimir()