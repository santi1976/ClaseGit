let amigos = ["coca", "pepsi", "led", "neon"]// console log array!


let amigosJSON = JSON.stringify(amigos); //formato funcion json stringify convierte el array en string en formato json.


let amigosOriginal = JSON.parse(amigosJSON);//Formato json funcion json.parse convierte el string en Array.


let persona = {
    nombre: "Maria",
    edad: 24,
    domi: "calle sarasa 123"
}

let personaJSON = JSON.stringify(persona)//objeto persona convierte con stringify en un string formato json
let personaOriginal = JSON.parse(personaJSON);//convierte con JSON.parse el objeto string em objeto o array con sus propiedades y valores.
console.log(amigos);