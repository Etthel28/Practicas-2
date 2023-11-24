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
/*function persona(nombrecito, cumpleañito, dondevive) {
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
*/

/*function persona(nombrecito, cumpleañito, dondevive) {
    this.nombre = nombrecito
    this.edad = cumpleañito
    this.calle = dondevive
    this.saludar = () => {
        alert("Hola, mi nombre es: " + this.nombre)
    }
}/*


//console.log(this.nombre)
const instanciaPersona = new persona("Ethel", 27, "San Pedro")
//instanciaPersona.saludar();






//operador IN-------------------------
//console.log("edad" in instanciaPersona);


//operador for in------------
let propiedad
for (propiedad in instanciaPersona) {
    console.log("Atributo: " + propiedad)
    console.log(instanciaPersona[propiedad])
}*/






//-------------------------------------------------------
//clase------------ este tipo de sintaxis es la que vamos a usar


/*class Persona {
    constructor(nombrecito, cumpleañito, dondevive) {
        this.nombre = nombrecito
        this.edad = cumpleañito
        this.calle = dondevive
    }
    saludar() {
        console.log("Hola, soy " + this.nombre + ", y tengo " + this.edad + " años de edad")
    }
}
const instanciaPersona2= new Persona("Ethel", 27, "San Pedro")
instanciaPersona2.saludar()
*/

//Ejemplo de cuenta bancaria

class cuentaBancaria {
    constructor(titular, cuenta, saldo, limite) {
        this.nombreTitular = titular
        this.nroCuenta = cuenta
        if (saldo >= 0) {
            this.saldo
        } else {
            this.saldo = 0
        }
        if (limite >= 150000) {
            this.limite
        } else {
            this.limite = 150000
        }
    }


    extraer(monto) {
        if (monto > 0) {
            this.saldo = this.saldo - monto
            if (monto <= this.saldo) {
                this.saldo -= monto
                rest = true
            } else {
                alert("No se puede extrae mas de los que hay")
                resul = false


            }
        }
        else {
            alert("No se puedes extraer montos negativos")
            resul = false
        }

        return res
    }

    
   
} 
