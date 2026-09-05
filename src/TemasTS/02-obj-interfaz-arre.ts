// Interface

interface Alumno{
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    nota?: number;
}

const alumno:Alumno={
    nombre: "Esteban",
    apellido: "Gonzalez",
    edad: 22,
    email: "stebangonzalez2605@outlook.com",
    nota: 8
}

console.table(alumno)

// Arreglo

let mascotas = ["perro", "gato", "perico"];
console.log(mascotas)

mascotas[1] = "pez" // Sustituye
mascotas.push("cuy") // Agregar uno nuevo

console.log(mascotas)


let tem:(number|string)[] = []

tem.push(16)
tem.push("Leon")
console.log(tem)