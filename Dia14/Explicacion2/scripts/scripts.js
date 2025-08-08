import Animal from "./Model/Animal.js";

let animal1 = new Animal("Paco","Perro"); // Instancia de la clase -> Objeto
animal1.hablar();
let animal2 = new Animal("Blue","Guacamayo");
animal2.hablar();
console.log(animal1.nombre);

// Cuenta Bancaria
import CuentaBancaria from "./Model/CuentaBancaria.js";
const cuenta = new CuentaBancaria('Pedro',1000);
cuenta.depositar(500);

console.log(cuenta.verSaldo()); // 1500
// console.log(cuenta.#saldo); // Error por no tener acceso al atributo
console.log(cuenta.saldo);