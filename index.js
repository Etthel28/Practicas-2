//----------------------------------- ARRAYS --------------------------------------------

/*let nombres = ["Ethel", "Ivana"];

nombres.push("Jorgelina")
console.log(nombres);

nombres.unshift("Orrego");
console.log(nombres);

nombres.shift();
console.log(nombres);

nombres.pop();
console.log(nombres);

nombres.splice(0,1);
console.log (nombres);

let nombres1 = ["Ethel", "Ivana", "Jorgelina", "Orrego"];
console.log(nombres1.join(" "));*/


/*
let perros = ["Lola" ,"Frida" ,"Remi"];
let gatos = ["Kira" ,"Nino"];
let mascotas = perros.concat(gatos);
console.log("Estas son las macotas que hay " + mascotas);*/

/*let nombres = ["Lola", "Frida", "Remi", "Kira", "Nino"]
nombres.reverse();
console.log(nombres);*/

//----------------------------------- OBJETOS --------------------------------------------

/*let nombre = "Homero"
let edad = 39
let calle = "Av. siempre 742"*/
// las variables anteriores estan relacionadas entre si, entonces mejor usamos los objetos literales
/*const persona = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. siempre 742"
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.calle);
/*console.log(persona["calle"]);  esta es otra forma de acceder a los atributos

ej: 
let atributo = prompt("Ingrese un atributo");
console.log(persona[atributo]);*/

//funciones constructoras
function persona(nombrecito, cumpleañito, dondevive) {
    this.nombre = nombrecito
    this.edad = cumpleañito
    this.calle = dondevive
    this.saludar = () => {
        alert("Hola, mi nombre es: " + this.nombre)
    }
}

//console.log(this.nombre)
const instanciaPersona = new persona("Ethel", 27, "San Pedro")
instanciaPersona.saludar();

