/*
Una clase es la representacion mas abstracta posible de 
un objeto de la vida real el cual tiene caractericiscas (atributos) 
y funciones (metodos) que lo caracterizan. 
*/
export default class Animal {
    /* El constructor es el indicativo de como una instancia de la clase 
    se debe crear(objeto) */
    // let nombre = "";
    // let especie = "";
    constructor(nombreAfuera, especieAfuera) {
        
        // Los atributos son las caracteristicas que un 
        // objeto tendra.
        this.nombre = nombreAfuera;
        this.especie = especieAfuera;
    }
    // Los metodos son las funciones que podra hacer
    hablar() {
        console.log(`El animal ${this.nombre} de la especie ${this.especie} esta hablando!!!`)
    }
}
